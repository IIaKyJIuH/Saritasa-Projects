import { ScannerService } from '@/app/core/services/scanner/scanner.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

/**
 * Page for scanning documents.
 */
@Component({
  selector: 'app-scanner',
  templateUrl: 'scanner.page.html',
  styleUrls: ['scanner.page.scss'],
})
export class ScannerPage {

  /**
   * URL of the scanned document.
   */
  public documentPath$: Observable<string>;

  /**
   * Percentage of task completion.
   */
  public percentage$: Observable<number>;

  constructor(
    private scannerService: ScannerService,
    private router: Router,
  ) {}

  /**
   * Makes scanning by preferred source.
   * @param ev - refers to the pressed segment-button with the specific value.
   */
  public doScanning(ev: any): void {
    const source = +ev.srcElement.value;
    this.documentPath$ = this.scannerService.scanDocument(source);
    this.percentage$ = this.documentPath$.pipe(
      switchMap((fileName) => this.scannerService.startUpload(fileName)),
      tap(() => ev.srcElement.checked = false),
    );
  }

}
