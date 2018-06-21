import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManufacturerListPage } from '../manufacturerList/list';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ProductListPage {
  vehicleName: any;
  icons: string[];
  products: Array<{title: string, icon: string}>;
  productTitles : string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.vehicleName = navParams.get('vehicle');
    console.log(navCtrl.getViews());

    // Let's populate this page with some filler content for funzies
    this.icons = ['belts.jpg','oil_seals.png','products.jpg'];

    this.productTitles=['Belts', 'OilSeals', 'New Auto Products'];
    this.products = [];
    for (let i = 0; i < 3; i++) {
      this.products.push({
        title: this.productTitles[i],
        icon: 'assets/imgs/'+this.icons[i]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ManufacturerListPage, {
      vehicle: this.vehicleName,
      product: item.title
    });
  }
}
