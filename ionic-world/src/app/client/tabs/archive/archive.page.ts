import { ScannerService } from '@/app/core/services/scanner/scanner.service';
import { Component } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { Observable, from } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

import { ImageModelPage } from './image-modal/image-model/image-model.page';

***REMOVED****
***REMOVED*** Page with all scanned documents.
***REMOVED***/
@Component({
  selector: 'app-archive',
  templateUrl: 'archive.page.html',
  styleUrls: ['archive.page.scss'],
})
export class ArchivePage {

***REMOVED***
 ***REMOVED*****REMOVED*** Urls for pictures.
***REMOVED***
  public images$: Observable<DocumentData[]>;

***REMOVED***
 ***REMOVED*****REMOVED*** Options for modal controller.
***REMOVED***
  public sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
***REMOVED*****REMOVED*****REMOVED***

  constructor(
    private scannerService: ScannerService,
    private modalCtrl: ModalController,
  ) {
    this.images$ = this.scannerService.getImagesInfoFromFirestore().pipe(
      tap(console.log),
    );
  }

***REMOVED***
 ***REMOVED*****REMOVED*** For 'trackBy' directive of***REMOVED***ngFor.
 ***REMOVED*****REMOVED*** @param index - index of the element from images$ array.
 ***REMOVED*****REMOVED*** @param imageObj - useful image properties.
***REMOVED***
  public trackByFunction(index: number, imageObj: any): string {
    if (!imageObj) { return null; }
    return `${index}_${imageObj.name}`;
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Opens more detailed page about this image.
 ***REMOVED*****REMOVED*** @param image - current centered image.
***REMOVED***
  public openPreview(image: any): void {
    this.modalCtrl.create({
      component: ImageModelPage,
      componentProps: {
        image: image,
  ***REMOVED*****REMOVED*****REMOVED***
    }).then(resultModal => resultModal.present());
  }

}
