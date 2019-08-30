import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { DocumentScannerOptions, DocumentScanner } from '@ionic-native/document-scanner/ngx';
import { File } from '@ionic-native/file/ngx';
import { Observable, from, of } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';

/**
 * For scanning documents, storing them and getting them back.
 */
@Injectable({
  providedIn: 'root',
})
export class ScannerService {

  /**
   * Main task of uploading image.
   */
  public task: AngularFireUploadTask;

  /**
   * Snapshot. // For now it looks like a hack.
   */
  public snapshot: Observable<any>;

  /**
   * .ctor
   * @param documentScanner - ionic plugin for scanning documents.
   * @param afStorage - my firebase storage for keeping images.
   * @param afStore - my firebase store for storing properties of images.
   * @param file - needed primary to make Blob file from my image.
   * @param dialog - needed to ask the user for things like file name.
   */
  constructor (
    private documentScanner: DocumentScanner,
    private afStorage: AngularFireStorage,
    private afStore: AngularFirestore,
    private file: File,
    private dialog: Dialogs,
  ) {}

  /**
  * Use source to scan the image and then send it to the firestore and the firestorage.
  * @returns percentage of completion of this task.
  */
  public scanDocument(source: number): Observable<number> {
    const opts: DocumentScannerOptions = { sourceType: source, fileName: 'myImage' };
    let name = '';
    let isEmpty = false;
    return from(this.documentScanner.scanDoc(opts)).pipe(
      switchMap((pathToImage) => from(this.dialog.prompt('', 'Please, enter the file name', ['Ok', 'Cancel'], 'Heh mda'))
        .pipe(
          switchMap(results => {
            if (results.buttonIndex === 1) { // One-based index of buttons array, so 1 = 'Ok')))
              name = results.input1;
              return this.uploadToFireStorage(pathToImage);
            }
            isEmpty = true;
            return of(null);
          }),
      )),
      tap(number => {
        if (!isEmpty) {
          from(this.task.task.snapshot.ref.getDownloadURL())
            .subscribe(fileDownloadUrl => this.uploadUrlToFirestore(fileDownloadUrl, name));
        }
      }),
    );

  }

  /**
   * Uploads picture on to the firestorage.
   * @param pathToImage - file destination after scanDocument call.
   * @returns percentage of completion.
   */
  public uploadToFireStorage(pathToImage: string): Observable<number> {
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
   * Saves properties of the picture into the firestore document.
   * @param fileDownloadUrl - url for downloading the document/picture.
   * @param fileName - name of file, inputed by user.
   */
  public uploadUrlToFirestore(fileDownloadUrl: string, fileName: string): void {
    this.afStore.collection('scanned-documents').add( { downloadUrl: fileDownloadUrl, name: fileName });
  }

  /**
   * Gets all the image properties from the firestore cloud store.
   */
  public getImagesInfoFromFirestore(): Observable<DocumentData[]> {
    return this.afStore.collection('scanned-documents').get().pipe(
      map(c => c.docs.map(each => each.data())),
    );
  }

}
