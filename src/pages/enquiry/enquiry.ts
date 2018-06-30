import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'enquiry.html'
})
export class EnquiryPage {

  enquiry = {}
  logForm() {
    console.log(this.enquiry)
  }

  constructor(public navCtrl: NavController) {

  }

}
