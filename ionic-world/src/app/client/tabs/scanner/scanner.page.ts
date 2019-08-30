import { ScannerService } from '@/app/core/services/scanner/scanner.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

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
  ***REMOVED*** Percentage of task completion.
***REMOVED***
  public percentage$: Observable<number>;

  constructor(
    private scannerService: ScannerService,
    private router: Router,
  ) {}

***REMOVED***
  ***REMOVED*** Makes scanning by preferred source.
  ***REMOVED*** @param ev - refers to the pressed segment-button with the specific value.
***REMOVED***
  public doScanning(ev: any): void {
    const source = +ev.srcElement.value;

    this.percentage$ = this.scannerService.scanDocument(source).pipe(
      tap(() => ev.srcElement.checked = false),
    );
  }

}
