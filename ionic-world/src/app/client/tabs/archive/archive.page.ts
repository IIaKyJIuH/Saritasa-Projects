import { ScannerService } from '@/app/core/services/scanner/scanner.service';
import { Component } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { Observable, from } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

import { ImageModelPage } from './image-modal/image-model/image-model.page';

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
  public images$: Observable<DocumentData[]>;

  /**
   * Options for modal controller.
   */
  public sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
  };

  constructor(
    private scannerService: ScannerService,
    private modalCtrl: ModalController,
  ) {
    this.images$ = this.scannerService.getImagesInfoFromFirestore().pipe(
      tap(console.log),
    );
  }

  /**
   * For 'trackBy' directive of *ngFor.
   * @param index - index of the element from images$ array.
   * @param imageObj - useful image properties.
   */
  public trackByFunction(index: number, imageObj: any): string {
    if (!imageObj) { return null; }
    return `${index}_${imageObj.name}`;
  }

  /**
   * Opens more detailed page about this image.
   * @param image - current centered image.
   */
  public openPreview(image: any): void {
    this.modalCtrl.create({
      component: ImageModelPage,
      componentProps: {
        image: image,
      },
    }).then(resultModal => resultModal.present());
  }

}
