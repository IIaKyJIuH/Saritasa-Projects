import { environment } from '@/environments/environment';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { DocumentScannerOptions, DocumentScanner } from '@ionic-native/document-scanner/ngx';
import { File } from '@ionic-native/file/ngx';
import { Observable, from } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

/**
 * For scanning documents, storing them and getting them back.
 */
@Injectable({
  providedIn: 'root',
})
export class ScannerService {

  /**
   * Main task.
   */
  public task: AngularFireUploadTask;

  /**
   * Snapshot.
   */
  public snapshot: Observable<any>;

  /**
   * Url for downloading documents.
   */
  public downloadURL: Observable<string>;

  /**
   * .ctor
   * @param documentScanner - ionic plugin for scanning documents.
   */
  constructor (
    private documentScanner: DocumentScanner,
    private afStorage: AngularFireStorage,
    private afStore: AngularFirestore,
    private file: File,
  ) {}

  /**
  * Use camera and then send it to the server.
  */
  public scanDocument(source: number): Observable<string> {
    const opts: DocumentScannerOptions = { sourceType: source, fileName: 'myImage' };
    const imageUrl: Observable<string> = from(this.documentScanner.scanDoc(opts));

    return imageUrl;
  }

  /**
   * Uploads picture on to the firestorage.
   * @param pathToImage - file destination after scanDocument call.
   * @returns percentage of completion.
   */
  public startUpload(pathToImage: string): Observable<number> {
    const n = pathToImage.lastIndexOf('/');
    const fileName = pathToImage.slice(n + 1);
    const fileDirectory = pathToImage.slice(0, n);

    return from(this.file.readAsArrayBuffer(fileDirectory, fileName)).pipe(
      switchMap((buffer) => {
        const imgBlob = new Blob([buffer], {
          type: 'image/jpeg',
        });
        this.task = this.afStorage.upload(`scanned-documents/${fileName}`, imgBlob);
        return this.task.percentageChanges();
      }),
    );
  }

  // /**
  //  * Saves path to the picture of the document.
  //  * @param fileDownloadUrl - url for downloading the document/picture.
  //  */
  // Private saveUrlToFirestore(fileDownloadUrl: string): void {
  //   This.snapshot = this.task.snapshotChanges().pipe(
  //     Tap(snap => {
  //       If (snap.bytesTransferred === snap.totalBytes) {
  //         This.afStore.collection('scanned-documents').add( { fileName: fileDownloadUrl, size: snap.totalBytes });
  //       }
  //       Console.log(snap.ref.getDownloadURL());
  //     }),
  //   );
  // }

}
