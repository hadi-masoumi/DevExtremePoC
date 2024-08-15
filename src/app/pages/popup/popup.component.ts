import { Component } from '@angular/core';
import { DxButtonTypes } from 'devextreme-angular/ui/button';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  popupVisible = false;

  popupWithScrollViewVisible = false;

  bookButtonOptions: DxButtonTypes.Properties = {
    width: 300,
    text: 'Book',
    type: 'default',
    stylingMode: 'contained',
    onClick: () => {
      this.popupVisible = false;
      this.popupWithScrollViewVisible = false;
    },
  };

  constructor() { }

  showPopup() {
    this.popupVisible = true;
  }

  showPopupWithScrollView() {
    this.popupWithScrollViewVisible = true;
  }

}
