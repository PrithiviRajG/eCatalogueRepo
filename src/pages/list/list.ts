import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductListPage } from '../productList/list';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  vehicles: Array<{title: string, icon: string}>;
  vehicleTitles : string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['bike.svg','auto.svg','car.svg','heavy.svg','light.svg','tractor.svg','search.svg'];

    this.vehicleTitles=['2 WHEELER', '3 WHEELER', 'CAR', 'Heavy Commercial Vehicle', 'Light Commercial Vehicle', 'TRACTORS', 'Others']
    this.vehicles = [];
    for (let i = 0; i < 7; i++) {
      this.vehicles.push({
        title: this.vehicleTitles[i],
        icon: 'assets/imgs/'+this.icons[i]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductListPage, {
      vehicle: item.title
    });
  }
}
