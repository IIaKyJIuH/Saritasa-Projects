import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { DocumentScannerOptions, DocumentScanner } from '@ionic-native/document-scanner/ngx';
import { File } from '@ionic-native/file/ngx';
import { Observable, from, of, empty } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';

***REMOVED****
***REMOVED*** For scanning documents, storing them and getting them back.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class ScannerService {

***REMOVED***
 ***REMOVED*****REMOVED*** Main task of uploading image.
***REMOVED***
  public task: AngularFireUploadTask;

***REMOVED***
 ***REMOVED*****REMOVED*** Snapshot. // For now it looks like a hack.
***REMOVED***
  public snapshot: Observable<any>;

***REMOVED***
 ***REMOVED*****REMOVED*** .ctor
 ***REMOVED*****REMOVED*** @param documentScanner - ionic plugin for scanning documents.
 ***REMOVED*****REMOVED*** @param afStorage - my firebase storage for keeping images.
 ***REMOVED*****REMOVED*** @param afStore - my firebase store for storing properties of images.
 ***REMOVED*****REMOVED*** @param file - needed primary to make Blob file from my image.
 ***REMOVED*****REMOVED*** @param dialog - needed to ask the user for things like file name.
***REMOVED***
  constructor (
    private documentScanner: DocumentScanner,
    private afStorage: AngularFireStorage,
    private afStore: AngularFirestore,
    private file: File,
    private dialog: Dialogs,
  ) {}

***REMOVED***
***REMOVED*****REMOVED*** Use source to scan the image and then send it to the firestore and the firestorage.
***REMOVED*****REMOVED*** @returns percentage of completion of this task.
***REMOVED*****REMOVED***/
  public scanDocument(source: number): Observable<number> {
    const opts: DocumentScannerOptions = { sourceType: source, fileName: 'myImage'***REMOVED*****REMOVED***
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

***REMOVED***
 ***REMOVED*****REMOVED*** Uploads picture on to the firestorage.
 ***REMOVED*****REMOVED*** @param pathToImage - file destination after scanDocument call.
 ***REMOVED*****REMOVED*** @returns percentage of completion.
***REMOVED***
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

***REMOVED***
 ***REMOVED*****REMOVED*** Saves properties of the picture into the firestore document.
 ***REMOVED*****REMOVED*** @param fileDownloadUrl - url for downloading the document/picture.
 ***REMOVED*****REMOVED*** @param fileName - name of file, inputed by user.
***REMOVED***
  public uploadUrlToFirestore(fileDownloadUrl: string, fileName: string): void {
    this.afStore.collection('scanned-documents').add( { downloadUrl: fileDownloadUrl, name: fileName });
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Gets all the image properties from the firestore cloud store.
***REMOVED***
  public getImagesInfoFromFirestore(): Observable<DocumentData[]> {
    return this.afStore.collection('scanned-documents').get().pipe(
      map(c => c.docs.map(each => each.data())),
    );
  }

}
