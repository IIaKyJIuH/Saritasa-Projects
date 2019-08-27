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
 ***REMOVED*****REMOVED*** Makes scanning with the chosen source type.
 ***REMOVED*****REMOVED*** @param source - refers to the source type according to the pluging documentation.
***REMOVED***
  public scanWithSource(source: number): void {
    this.documentPath$ = this.scannerService.scanDocument(source);
    this.percentage$ = this.documentPath$.pipe(
      switchMap((fileName) => this.scannerService.startUpload(fileName)),
    );
  }

}
