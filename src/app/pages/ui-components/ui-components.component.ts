import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { DxTreeViewComponent } from 'devextreme-angular';
import { DxButtonTypes } from 'devextreme-angular/ui/button';
import { DxTreeViewTypes } from 'devextreme-angular/ui/tree-view';

@Component({
  selector: 'app-ui-components',
  templateUrl: './ui-components.component.html',
  styleUrls: ['./ui-components.component.css']
})
export class UiComponentsComponent {
  @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;

  treeDataSource: any;

  gridDataSource: any;

  treeBoxValue: any[] = [];

  gridBoxValue = [3];

  options = [
    {
      "ID": 1,
      "name": "Provinces"
    },
    {
      "ID": "1_1",
      "categoryId": 1,
      "name": "Istanbul"
    },
    {
      "ID": "1_1_1",
      "categoryId": "1_1",
      "name": "Kadıköy"
    },
    {
      "ID": "1_1_1_1",
      "categoryId": "1_1_1",
      "name": "Fenerbahçe"
    },
    {
      "ID": "1_1_1_2",
      "categoryId": "1_1_1",
      "name": "Moda"
    },
    {
      "ID": "1_1_2",
      "categoryId": "1_1",
      "name": "Beşiktaş"
    },
    {
      "ID": "1_1_2_1",
      "categoryId": "1_1_2",
      "name": "Etiler"
    },
    {
      "ID": "1_1_2_2",
      "categoryId": "1_1_2",
      "name": "Ortaköy"
    },
    {
      "ID": "1_2",
      "categoryId": 1,
      "name": "Ankara"
    },
    {
      "ID": "1_2_1",
      "categoryId": "1_2",
      "name": "Çankaya"
    },
    {
      "ID": "1_2_1_1",
      "categoryId": "1_2_1",
      "name": "Kızılay"
    },
    {
      "ID": "1_2_1_2",
      "categoryId": "1_2_1",
      "name": "Bahçelievler"
    },
    {
      "ID": "1_2_2",
      "categoryId": "1_2",
      "name": "Yenimahalle"
    },
    {
      "ID": "1_2_2_1",
      "categoryId": "1_2_2",
      "name": "Batıkent"
    },
    {
      "ID": "1_2_2_2",
      "categoryId": "1_2_2",
      "name": "Demetevler"
    },
    {
      "ID": "1_3",
      "categoryId": 1,
      "name": "Izmir"
    },
    {
      "ID": "1_3_1",
      "categoryId": "1_3",
      "name": "Konak"
    },
    {
      "ID": "1_3_1_1",
      "categoryId": "1_3_1",
      "name": "Alsancak"
    },
    {
      "ID": "1_3_1_2",
      "categoryId": "1_3_1",
      "name": "Güzelyalı"
    },
    {
      "ID": "1_3_2",
      "categoryId": "1_3",
      "name": "Karşıyaka"
    },
    {
      "ID": "1_3_2_1",
      "categoryId": "1_3_2",
      "name": "Bostanlı"
    },
    {
      "ID": "1_3_2_2",
      "categoryId": "1_3_2",
      "name": "Mavişehir"
    },
    {
      "ID": 2,
      "name": "Autonomous Communities"
    },
    {
      "ID": "2_1",
      "categoryId": 2,
      "name": "Andalusia"
    },
    {
      "ID": "2_1_1",
      "categoryId": "2_1",
      "name": "Seville"
    },
    {
      "ID": "2_1_1_1",
      "categoryId": "2_1_1",
      "name": "Triana"
    },
    {
      "ID": "2_1_1_2",
      "categoryId": "2_1_1",
      "name": "Nervión"
    },
    {
      "ID": "2_1_2",
      "categoryId": "2_1",
      "name": "Málaga"
    },
    {
      "ID": "2_1_2_1",
      "categoryId": "2_1_2",
      "name": "Centro"
    },
    {
      "ID": "2_1_2_2",
      "categoryId": "2_1_2",
      "name": "Teatinos"
    },
    {
      "ID": "2_2",
      "categoryId": 2,
      "name": "Catalonia"
    },
    {
      "ID": "2_2_1",
      "categoryId": "2_2",
      "name": "Barcelona"
    },
    {
      "ID": "2_2_1_1",
      "categoryId": "2_2_1",
      "name": "Eixample"
    },
    {
      "ID": "2_2_1_2",
      "categoryId": "2_2_1",
      "name": "Gràcia"
    },
    {
      "ID": "2_2_2",
      "categoryId": "2_2",
      "name": "Girona"
    },
    {
      "ID": "2_2_2_1",
      "categoryId": "2_2_2",
      "name": "Barri Vell"
    },
    {
      "ID": "2_2_2_2",
      "categoryId": "2_2_2",
      "name": "Montjuïc"
    },
    {
      "ID": "2_3",
      "categoryId": 2,
      "name": "Madrid"
    },
    {
      "ID": "2_3_1",
      "categoryId": "2_3",
      "name": "Madrid"
    },
    {
      "ID": "2_3_1_1",
      "categoryId": "2_3_1",
      "name": "Salamanca"
    },
    {
      "ID": "2_3_1_2",
      "categoryId": "2_3_1",
      "name": "Chamberí"
    },
    {
      "ID": "2_3_2",
      "categoryId": "2_3",
      "name": "Getafe"
    },
    {
      "ID": "2_3_2_1",
      "categoryId": "2_3_2",
      "name": "Centro"
    },
    {
      "ID": "2_3_2_2",
      "categoryId": "2_3_2",
      "name": "El Bercial"
    },
    {
      "ID": 3,
      "name": "Governorates"
    },
    {
      "ID": "3_1",
      "categoryId": 3,
      "name": "Cairo"
    },
    {
      "ID": "3_1_1",
      "categoryId": "3_1",
      "name": "Nasr City"
    }
  ];

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

  constructor(http: HttpClient) {
  }

  makeAsyncDataSource(http: HttpClient, jsonFile: string) {
  }

  onDropDownBoxValueChanged() {
    this.updateSelection(this.treeView?.instance);
  }

  onTreeViewReady(e: DxTreeViewTypes.ContentReadyEvent) {
    this.updateSelection(e.component);
  }

  updateSelection(treeView: DxTreeViewComponent['instance']) {
    if (!treeView) return;

    if (!this.treeBoxValue) {
      treeView.unselectAll();
    }

    this.treeBoxValue?.forEach(((value) => {
      treeView.selectItem(value);
    }));
  }

  onTreeViewSelectionChanged(e: DxTreeViewTypes.ItemSelectionChangedEvent) {
    this.treeBoxValue = e.component.getSelectedNodeKeys();
  }

  showPopup() {
    this.popupVisible = true;
  }

  showPopupWithScrollView() {
    this.popupWithScrollViewVisible = true;
  }
}
