import { ScannerService } from '@/app/core/services/scanner/scanner.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

***REMOVED****
***REMOVED*** Page for scanning documents.
***REMOVED***/
@Component({
  selector: 'app-scanner',
  templateUrl: 'scanner.page.html',
  styleUrls: ['scanner.page.scss'],
})
export class ScannerPage {

***REMOVED***
 ***REMOVED*****REMOVED*** URL of the scanned document.
***REMOVED***
  public documentPath$: Observable<string>;

***REMOVED***
 ***REMOVED*****REMOVED*** Percentage of task completion.
***REMOVED***
  public percentage$: Observable<number>;

  constructor(
    private scannerService: ScannerService,
    private router: Router,
  ) {}

***REMOVED***
 ***REMOVED*****REMOVED*** Makes scanning by preferred source.
 ***REMOVED*****REMOVED*** @param ev - refers to the pressed segment-button with the specific value.
***REMOVED***
  public doScanning(ev: any): void {
    const source = +ev.srcElement.value;
    this.documentPath$ = this.scannerService.scanDocument(source);
    this.percentage$ = this.documentPath$.pipe(
      switchMap((fileName) => this.scannerService.startUpload(fileName)),
      tap(() => ev.srcElement.checked = false),
    );
  }

}
