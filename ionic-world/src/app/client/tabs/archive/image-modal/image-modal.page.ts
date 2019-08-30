import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

***REMOVED****
***REMOVED*** Detailed info about chosen image.
***REMOVED***/
@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage {

***REMOVED***
  ***REMOVED*** Chosen by user image.
***REMOVED***
  @Input() public image: any;

***REMOVED***
  ***REMOVED*** For zooming in/out purposes.
***REMOVED***
  @ViewChild('slider', { read: ElementRef, static: false }) public slider: ElementRef;

***REMOVED***
  ***REMOVED*** Options for modal controller.
***REMOVED***
  public sliderOpts = {
    zoom: {
      maxRatio: 3,
 ***REMOVED*****REMOVED***
    effect: 'flip',
    flipEffect: {
      rotate: 30,
 ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED***

  constructor(
    private modalCtrl: ModalController,
  ) {}

***REMOVED***
  ***REMOVED*** Zooming the image if only the user wants to.
  ***REMOVED*** @param zoomIn - true if user is zooming in.
***REMOVED***
  public zoom(zoomIn: boolean): void {
    const zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }

***REMOVED***
  ***REMOVED*** Closes modal and goes back to the gallery.
***REMOVED***
  public close(): void {
    this.modalCtrl.dismiss();
  }

}
