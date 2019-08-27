import { environment } from '@/environments/environment';
import { Injectable } from '@angular/core';
import { AngularFirestore, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { map } from '@firebase/util';
import { DocumentScannerOptions, DocumentScanner } from '@ionic-native/document-scanner/ngx';
import { File } from '@ionic-native/file/ngx';
import { Observable, from, forkJoin } from 'rxjs';
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
  public scanDocument(source: number): Observable<number> {
    const opts: DocumentScannerOptions = { sourceType: source, fileName: 'myImage' };
    return from(this.documentScanner.scanDoc(opts)).pipe(
      switchMap((fileName) => this.startUpload(fileName)),
      tap(number => {
        from(this.task.task.snapshot.ref.getDownloadURL())
          .subscribe(fileDownloadUrl => this.saveUrlToFirestore(fileDownloadUrl));
      }),
    );

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

  /**
   * Saves path to the picture of the document.
   * @param fileDownloadUrl - url for downloading the document/picture.
   */
  public saveUrlToFirestore(fileDownloadUrl: string): void {
    this.afStore.collection('scanned-documents').add( { downloadUrl: fileDownloadUrl });
  }

  /**
   * Gets all the download urls from the firestore cloud store.
   */
  public getUrlsFromFirestore(): Observable<string[]> {
    return forkJoin([from(this.afStore.collection('scanned-documents').get()).pipe(
      switchMap(querySnapshot => {
        const s = querySnapshot.docs.map(doc => {
          console.log(doc.data());
          return doc.data().downloadUrl;
        });
        console.log(s);
        return s;
      }),
    )],
    );
  }

}
