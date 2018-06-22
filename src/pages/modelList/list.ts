import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vehicle } from '../transferObject/vehicle';
import { ProductDetailsCard } from '../productDetails/card';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ModelListPage {
  vehicleName: any;
  productName: any;
  manufacturerName: any;
  icons: string[];
  products: Array<{ title: string, icon: string }>;
  vehicle: Vehicle = new Vehicle();
  manufacturerTitles: string[];
  modelTitles: string[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.vehicleName = navParams.get('vehicle');
    this.productName = navParams.get('product');
    this.manufacturerName = navParams.get('manufacturer');
    this.vehicle.vehicleName = this.vehicleName;
    this.vehicle.product.productName = this.productName;

    this.initializeItems();

  }

  initializeItems() {

    if (this.vehicle.vehicleName === '2 WHEELER' &&
      this.vehicle.product.productName === 'Belts') {
      this.modelTitles = ["Maestro Edge/Duet(2017 BS4 model)",
        "Majestic Deluxe/Pacer/Panther",
        "Pleasure"
      ];

    }

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductDetailsCard, {
      vehicle: this.vehicleName,
      product: this.productName,
      manufacturer: this.manufacturerName,
      model : item
    });
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.manufacturerTitles = this.manufacturerTitles.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
