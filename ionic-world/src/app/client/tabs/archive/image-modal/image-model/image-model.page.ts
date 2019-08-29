import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController, IonSlide } from '@ionic/angular';

***REMOVED****
***REMOVED*** Detailed info about chosen image.
***REMOVED***/
@Component({
  selector: 'app-image-model',
  templateUrl: './image-model.page.html',
  styleUrls: ['./image-model.page.scss'],
})
export class ImageModelPage {

***REMOVED***
 ***REMOVED*****REMOVED*** Chosen image.
***REMOVED***
  public image: any;

***REMOVED***
 ***REMOVED*****REMOVED*** For zooming in/out purposes.
***REMOVED***
  @ViewChild('slider', { read: ElementRef, static: false }) public slider: ElementRef;

***REMOVED***
 ***REMOVED*****REMOVED*** Options for modal controller.
***REMOVED***
  public sliderOpts = {
    zoom: {
      maxRatio: 3,
***REMOVED*****REMOVED*****REMOVED***
***REMOVED*****REMOVED*****REMOVED***

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
  ) {
    this.image = this.navParams.get('image');
  }

***REMOVED***
 ***REMOVED*****REMOVED*** Zooming the image if only the user wants to.
 ***REMOVED*****REMOVED*** @param zoomIn - true if user is zooming in.
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
 ***REMOVED*****REMOVED*** Closes modal and goes back to the gallery.
***REMOVED***
  public close(): void {
    this.modalCtrl.dismiss();
  }

}
