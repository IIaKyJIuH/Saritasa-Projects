import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

/**
 * Detailed info about chosen image.
 */
@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage {

  /**
   * Chosen by user image.
   */
  @Input() public image: any;

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
    effect: 'flip',
    flipEffect: {
      rotate: 30,
    },
  };

  constructor(
    private modalCtrl: ModalController,
  ) {}

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
