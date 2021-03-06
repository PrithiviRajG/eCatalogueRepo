import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductListPage } from '../pages/productList/list';
import { ManufacturerListPage } from '../pages/manufacturerList/list';
import { ModelListPage } from '../pages/modelList/list';
import { ProductDetailsCard } from '../pages/productDetails/card';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { EnquiryPage } from '../pages/enquiry/enquiry';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';


export const firebaseConfig = {
  apiKey: "AIzaSyAY4_9moLsRouKzMyZBDkb--5i8N71h96U",
    authDomain: "ucalproject.firebaseapp.com",
    databaseURL: "https://ucalproject.firebaseio.com",
    projectId: "ucalproject",
    storageBucket: "ucalproject.appspot.com",
    messagingSenderId: "204990184677"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductListPage,
    ManufacturerListPage,
    ModelListPage,
    ProductDetailsCard,
    ContactPage,
    AboutPage,
    EnquiryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductListPage,
    ManufacturerListPage,
    ModelListPage,
    ProductDetailsCard,
    ContactPage,
    AboutPage,
    EnquiryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
