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
  public scanDocument(source: number): Observable<number> {
    const opts: DocumentScannerOptions = { sourceType: source, fileName: 'myImage'***REMOVED*****REMOVED***
    return from(this.documentScanner.scanDoc(opts)).pipe(
      switchMap((fileName) => this.startUpload(fileName)),
      tap(number => {
        from(this.task.task.snapshot.ref.getDownloadURL())
          .subscribe(fileDownloadUrl => this.saveUrlToFirestore(fileDownloadUrl));
      }),
    );

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

***REMOVED***
 ***REMOVED*****REMOVED*** Saves path to the picture of the document.
 ***REMOVED*****REMOVED*** @param fileDownloadUrl - url for downloading the document/picture.
***REMOVED***
  public saveUrlToFirestore(fileDownloadUrl: string): void {
    this.afStore.collection('scanned-documents').add( { downloadUrl: fileDownloadUrl });
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Gets all the download urls from the firestore cloud store.
***REMOVED***
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
