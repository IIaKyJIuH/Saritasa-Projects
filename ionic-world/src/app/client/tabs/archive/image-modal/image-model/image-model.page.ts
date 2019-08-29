import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController, IonSlide } from '@ionic/angular';

/**
 * Detailed info about chosen image.
 */
@Component({
  selector: 'app-image-model',
  templateUrl: './image-model.page.html',
  styleUrls: ['./image-model.page.scss'],
})
export class ImageModelPage {

  /**
   * Chosen image.
   */
  public image: any;

  /**
   * For zooming in/out purposes.
   */
  @ViewChild('slider', { read: ElementRef, static: false }) public slider: ElementRef;

  /**
   * Options for modal controller.
   */
  public sliderOpts = {
    zoom: {
      maxRatio: 3,
    },
  };

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
  ) {
    this.image = this.navParams.get('image');
  }

  /**
   * Zooming the image if only the user wants to.
   * @param zoomIn - true if user is zooming in.
   */
  public zoom(zoomIn: boolean): void {
    const zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }

  /**
   * Closes modal and goes back to the gallery.
   */
  public close(): void {
    this.modalCtrl.dismiss();
  }

}
