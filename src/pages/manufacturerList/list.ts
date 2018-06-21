import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vehicle } from '../transferObject/vehicle';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ManufacturerListPage {
  vehicleName: any;
  productName: any;
  icons: string[];
  products: Array<{title: string, icon: string}>;
  vehicle : Vehicle = new Vehicle();
  manufacturerTitles : string[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.vehicleName = navParams.get('vehicle');
    this.productName = navParams.get('product');
    this.vehicle.vehicleName = this.vehicleName;
    this.vehicle.product.productName = this.productName;
    this.initializeItems();
        
  }

  initializeItems() {

    if(this.vehicle.vehicleName === '2 WHEELER' && 
    this.vehicle.product.productName === 'Belts') {
      this.manufacturerTitles = ['Hero Motors', 'Honda', 'Kinetic Engineering',
    'Mahindra', 'Piaggio', 'Suzuki', 'TVS Motors', 'Yamaha'];

    }

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    /*this.navCtrl.push(ListPage, {
      item: item
    });*/
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
