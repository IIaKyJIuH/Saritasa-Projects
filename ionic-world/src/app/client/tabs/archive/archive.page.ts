import { ScannerService } from '@/app/core/services/scanner/scanner.service';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Page with all scanned documents.
 */
@Component({
  selector: 'app-archive',
  templateUrl: 'archive.page.html',
  styleUrls: ['archive.page.scss'],
})
export class ArchivePage {

  /**
   * Urls for pictures.
   */
  public images$: Observable<string[]>;

  constructor(
    private scannerService: ScannerService,
    private afStore: AngularFirestore,
  ) {
    this.images$ = this.scannerService.getUrlsFromFirestore().pipe(tap(c => console.log(c)));
  }

}
