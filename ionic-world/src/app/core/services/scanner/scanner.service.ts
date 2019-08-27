import { environment } from '@/environments/environment';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { DocumentScannerOptions, DocumentScanner } from '@ionic-native/document-scanner/ngx';
import { File } from '@ionic-native/file/ngx';
import { Observable, from } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

***REMOVED****
***REMOVED*** For scanning documents, storing them and getting them back.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class ScannerService {

***REMOVED***
 ***REMOVED*****REMOVED*** Main task.
***REMOVED***
  public task: AngularFireUploadTask;

***REMOVED***
 ***REMOVED*****REMOVED*** Snapshot.
***REMOVED***
  public snapshot: Observable<any>;

***REMOVED***
 ***REMOVED*****REMOVED*** Url for downloading documents.
***REMOVED***
  public downloadURL: Observable<string>;

***REMOVED***
 ***REMOVED*****REMOVED*** .ctor
 ***REMOVED*****REMOVED*** @param documentScanner - ionic plugin for scanning documents.
***REMOVED***
  constructor (
    private documentScanner: DocumentScanner,
    private afStorage: AngularFireStorage,
    private afStore: AngularFirestore,
    private file: File,
  ) {}

***REMOVED***
***REMOVED*****REMOVED*** Use camera and then send it to the server.
***REMOVED*****REMOVED***/
  public scanDocument(source: number): Observable<string> {
    const opts: DocumentScannerOptions = { sourceType: source, fileName: 'myImage'***REMOVED*****REMOVED***
    const imageUrl: Observable<string> = from(this.documentScanner.scanDoc(opts));

    return imageUrl;
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Uploads picture on to the firestorage.
 ***REMOVED*****REMOVED*** @param pathToImage - file destination after scanDocument call.
 ***REMOVED*****REMOVED*** @returns percentage of completion.
***REMOVED***
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

  /***REMOVED*****REMOVED*****REMOVED****
  //***REMOVED*****REMOVED*** Saves path to the picture of the document.
  //***REMOVED*****REMOVED*** @param fileDownloadUrl - url for downloading the document/picture.
  //***REMOVED*****REMOVED***/
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
