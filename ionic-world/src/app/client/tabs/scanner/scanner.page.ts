import { ScannerService } from '@/app/core/services/scanner/scanner.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
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
    this.percentage$ = this.scannerService.scanDocument(source).pipe(
      tap(number => ev.srcElement.checked = false),
    );
  }

}
