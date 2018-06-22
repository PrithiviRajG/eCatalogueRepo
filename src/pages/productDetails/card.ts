import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vehicle } from '../transferObject/vehicle';
import { ModelListPage } from '../modelList/list';
@Component({
  selector: 'page-list',
  templateUrl: 'card.html'
})
export class ProductDetailsCard {
  vehicleName: any;
  productName: any;
  manufacturerName : any;
  modelName : any;
  icons: string[];
  products: Array<{title: string, icon: string}>;
  vehicle : Vehicle = new Vehicle();
  manufacturerTitles : string[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.vehicleName = navParams.get('vehicle');
    this.productName = navParams.get('product');
    this.manufacturerName = navParams.get('manufacturer');
    this.modelName = navParams.get('model');
    console.log(this.manufacturerName);
    console.log(this.modelName);
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
    this.navCtrl.push(ModelListPage, {
      vehicle: this.vehicleName,
      product: this.productName,
      manufacturer: item
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
