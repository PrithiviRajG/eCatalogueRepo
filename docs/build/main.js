webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productList_list__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['bike.svg', 'auto.svg', 'car.svg', 'light.svg'];
        this.vehicleTitles = ['2 WHEELER', '3 WHEELER', 'CAR', 'Commercial'];
        this.vehicles = [];
        for (var i = 0; i < 4; i++) {
            this.vehicles.push({
                title: this.vehicleTitles[i],
                icon: 'assets/imgs/' + this.icons[i]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__productList_list__["a" /* ProductListPage */], {
            vehicle: item.title
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\eCatalogueRepo\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Welcome to UCAL</ion-title>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <div class="container">\n\n        <div *ngFor="let vehicle of vehicles" (click)="itemTapped($event, vehicle)" class="item item-al">\n\n          <img [src]="vehicle.icon">\n\n          <p class="text-content">{{vehicle.title}}</p>\n\n        </div>\n\n        </div>\n\n<!--\n\n  <ion-list>\n\n    <ion-item  *ngFor="let vehicle of vehicles" (click)="itemTapped($event, vehicle)">\n\n      <ion-thumbnail item-start>\n\n        <img [src]="vehicle.icon">\n\n      </ion-thumbnail>\n\n      <h3>{{vehicle.title}}</h3>\n\n      <button ion-button clear item-end>view</button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>-->\n\n</ion-content>\n\n'/*ion-inline-end:"E:\eCatalogueRepo\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vehicle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product__ = __webpack_require__(283);

var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.product = new __WEBPACK_IMPORTED_MODULE_0__product__["a" /* Product */]();
    }
    return Vehicle;
}());

//# sourceMappingURL=vehicle.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transferObject_vehicle__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productDetails_card__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModelListPage = /** @class */ (function () {
    function ModelListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vehicle = new __WEBPACK_IMPORTED_MODULE_2__transferObject_vehicle__["a" /* Vehicle */]();
        // If we navigated to this page, we will have an item available as a nav param
        this.vehicleName = navParams.get('vehicle');
        this.productName = navParams.get('product');
        this.manufacturerName = navParams.get('manufacturer');
        this.vehicle.vehicleName = this.vehicleName;
        this.vehicle.product.productName = this.productName;
        this.initializeItems();
    }
    ModelListPage.prototype.initializeItems = function () {
        if (this.vehicle.vehicleName === '2 WHEELER' &&
            this.vehicle.product.productName === 'Belts') {
            this.modelTitles = ["Maestro Edge/Duet(2017 BS4 model)",
                "Majestic Deluxe/Pacer/Panther",
                "Pleasure"
            ];
        }
    };
    ModelListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__productDetails_card__["a" /* ProductDetailsCard */], {
            vehicle: this.vehicleName,
            product: this.productName,
            manufacturer: this.manufacturerName,
            model: item
        });
    };
    ModelListPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.manufacturerTitles = this.manufacturerTitles.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ModelListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\eCatalogueRepo\src\pages\modelList\list.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Models</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar >\n\n      <ion-title>{{vehicleName}} > {{productName}} > {{manufacturerName}}</ion-title>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item (click)="itemTapped($event, item)" *ngFor="let item of modelTitles">\n\n      {{ item }}\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\eCatalogueRepo\src\pages\modelList\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ModelListPage);
    return ModelListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.recaptchaVerifier = new __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth.RecaptchaVerifier('recaptcha-container');
    };
    HomePage.prototype.signIn = function (phoneNumber) {
        var _this = this;
        var appVerifier = this.recaptchaVerifier;
        var phoneNumberString = "+" + phoneNumber;
        /*alert("sign In");
        (<any>window).FirebasePlugin.getVerificationID(phoneNumberString, (credential)=> {
          console.log(credential);
         alert(phoneNumberString);
      
          var verificationId = credential;
    
          let prompt = this.alertCtrl.create({
            title: 'Enter the Confirmation code',
            inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
            buttons: [
              {
                text: 'Cancel',
                handler: data => { console.log('Cancel clicked'); }
              },
              {
                text: 'Send',
                handler: data => {
                  var signInCredential = firebase.auth.PhoneAuthProvider.credential(verificationId, data.confirmationCode);
                  firebase.auth().signInWithCredential(signInCredential)
                    .then( (result)=> {
                      // User signed in successfully.
                      console.log(result);
                      this.navCtrl.setRoot(ListPage);
                      // ...
                    }).catch( (error) => {
                      // User couldn't sign in (bad verification code?)
                      // ...
                      console.log("verigication faile");
                      alert(error);
                      confirm(error);
                    });
                }
              }
            ]
          });
          prompt.present();
          
         
      }, (error)=> {
          console.error(error);
          alert(error)
      });*/
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
            .then(function (confirmationResult) {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            var prompt = _this.alertCtrl.create({
                title: 'Enter the Confirmation code',
                inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) { console.log('Cancel clicked'); }
                    },
                    {
                        text: 'Send',
                        handler: function (data) {
                            // Here we need to handle the confirmation code
                            confirmationResult.confirm(data.confirmationCode)
                                .then(function (result) {
                                // User signed in successfully.
                                console.log(result.user);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */]);
                                // ...
                            }).catch(function (error) {
                                // User couldn't sign in (bad verification code?)
                                // ...
                                console.log("verigication faile");
                                alert(error);
                                confirm(error);
                            });
                        }
                    }
                ]
            });
            prompt.present();
        })
            .catch(function (error) {
            alert(error);
            console.error("SMS not sent", error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\eCatalogueRepo\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div id="recaptcha-container"></div>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Phone Number</ion-label>\n\n    <ion-input type="number" [(ngModel)]="phoneNumber"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button id="sign-in-button" (click)="signIn(phoneNumber)">\n\n    Sign In\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\eCatalogueRepo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manufacturerList_list__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListPage = /** @class */ (function () {
    function ProductListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.vehicleName = navParams.get('vehicle');
        console.log(navCtrl.getViews());
        // Let's populate this page with some filler content for funzies
        this.icons = ['belts.jpg', 'oil_seals.png', 'products.jpg'];
        this.productTitles = ['Belts', 'OilSeals', 'New Auto Products'];
        this.products = [];
        for (var i = 0; i < 3; i++) {
            this.products.push({
                title: this.productTitles[i],
                icon: 'assets/imgs/' + this.icons[i]
            });
        }
    }
    ProductListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__manufacturerList_list__["a" /* ManufacturerListPage */], {
            vehicle: this.vehicleName,
            product: item.title
        });
    };
    ProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\eCatalogueRepo\src\pages\productList\list.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Products</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar >\n\n      <ion-title>{{vehicleName}}</ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>-->\n\n\n\n    <ion-item  *ngFor="let product of products" (click)="itemTapped($event, product)">\n\n      <ion-thumbnail item-start>\n\n        <img [src]="product.icon">\n\n      </ion-thumbnail>\n\n      <h3>{{product.title}}</h3>\n\n      <button ion-button clear item-end>view</button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{vehicleName}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\eCatalogueRepo\src\pages\productList\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProductListPage);
    return ProductListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transferObject_vehicle__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelList_list__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManufacturerListPage = /** @class */ (function () {
    function ManufacturerListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vehicle = new __WEBPACK_IMPORTED_MODULE_2__transferObject_vehicle__["a" /* Vehicle */]();
        // If we navigated to this page, we will have an item available as a nav param
        this.vehicleName = navParams.get('vehicle');
        this.productName = navParams.get('product');
        this.vehicle.vehicleName = this.vehicleName;
        this.vehicle.product.productName = this.productName;
        this.initializeItems();
    }
    ManufacturerListPage.prototype.initializeItems = function () {
        if (this.vehicle.vehicleName === '2 WHEELER' &&
            this.vehicle.product.productName === 'Belts') {
            this.manufacturerTitles = ['Hero Motors', 'Honda', 'Kinetic Engineering',
                'Mahindra', 'Piaggio', 'Suzuki', 'TVS Motors', 'Yamaha'];
        }
    };
    ManufacturerListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modelList_list__["a" /* ModelListPage */], {
            vehicle: this.vehicleName,
            product: this.productName,
            manufacturer: item
        });
    };
    ManufacturerListPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.manufacturerTitles = this.manufacturerTitles.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ManufacturerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\eCatalogueRepo\src\pages\manufacturerList\list.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Manufacturer</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar >\n\n      <ion-title>{{vehicleName}} > {{productName}}</ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item (click)="itemTapped($event, item)" *ngFor="let item of manufacturerTitles">\n\n      {{ item }}\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\eCatalogueRepo\src\pages\manufacturerList\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ManufacturerListPage);
    return ManufacturerListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transferObject_vehicle__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelList_list__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailsCard = /** @class */ (function () {
    function ProductDetailsCard(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vehicle = new __WEBPACK_IMPORTED_MODULE_2__transferObject_vehicle__["a" /* Vehicle */]();
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
    ProductDetailsCard.prototype.initializeItems = function () {
        if (this.vehicle.vehicleName === '2 WHEELER' &&
            this.vehicle.product.productName === 'Belts') {
            this.manufacturerTitles = ['Hero Motors', 'Honda', 'Kinetic Engineering',
                'Mahindra', 'Piaggio', 'Suzuki', 'TVS Motors', 'Yamaha'];
        }
    };
    ProductDetailsCard.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modelList_list__["a" /* ModelListPage */], {
            vehicle: this.vehicleName,
            product: this.productName,
            manufacturer: item
        });
    };
    ProductDetailsCard.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.manufacturerTitles = this.manufacturerTitles.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ProductDetailsCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\eCatalogueRepo\src\pages\productDetails\card.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Product Details</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar >\n\n      {{vehicleName}} > {{productName}} > {{manufacturerName}} > {{modelName}}\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n<ion-card>\n\n  <ion-card-header>\n\n    <div><h3>Application</h3></div>\n\n    <div><h1>Variable Speed</h1></div>\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n    \n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <div><h3>JKF Part No</h3></div>\n\n          <div><h2>VS735EPDM (A)</h2></div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <div><h3>Reference Part No</h3></div>\n\n            <div><h2>23100-AAL-5000</h2></div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-col col-6>\n\n            <div><h3>Belt Type</h3></div>\n\n            <div><h2>Cogged</h2></div>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n              <div><h3>MRP</h3></div>\n\n              <div><h2>Rs. 340</h2></div>\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n  </ion-card-content>\n\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\eCatalogueRepo\src\pages\productDetails\card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProductDetailsCard);
    return ProductDetailsCard;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\eCatalogueRepo\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Contact</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar class="logo">\n\n      <!--<img src="../assets/imgs/logo_ucal_fuel.jpg" alt="UCAL Fuel">-->\n\n  </ion-toolbar>\n\n  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    \n\n  \n\n  <ion-card>\n\n      <ion-card-header>\n\n          \n\n          <h1>Call</h1>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <ion-list>\n\n            <ion-item>\n\n              +91 3423422423\n\n            </ion-item>\n\n            <ion-item>\n\n                +91 3423422423\n\n              </ion-item>\n\n          </ion-list>\n\n          \n\n          </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n      <ion-card-header>\n\n          \n\n          <h1>E-Mail</h1>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <ion-list>\n\n            <ion-item>\n\n              support@ucal.com\n\n            </ion-item>\n\n            <ion-item>\n\n                support1@ucal.com\n\n              </ion-item>\n\n          </ion-list>\n\n          \n\n          </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n      <img src="assets/imgs/contact_head_ofc.png" alt="your image">\n\n      <ion-card-header>\n\n          \n\n          <h1>Head Office</h1>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <h2>UCAL Fuel System</h2>\n\n\n\n            Raheja Towers, Delta Wing - Unit 705 177,\n\n            Anna Salai, Chennai, 600 002 \n\n            Tamil Nadu.\n\n            \n\n            CIN L31900TN1985PLC012343\n\n          \n\n          </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\eCatalogueRepo\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\eCatalogueRepo\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>About UCAL</ion-title>\n\n  </ion-navbar>\n\n  \n\n  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <img src="assets/imgs/about_company.jpg" alt="UCAL Fuel">\n\n  <p ion-text>\n\n      UCAL Fuel System Limited offers comprehensive Fuel Management Systems for Automotive sector. The company also manufactures pumps, emission control parts and various components for both ferrous and non ferrous material. From high pressure die casting to precision machined parts of micron level accuracy, UCAL is committed to produce the best the industry needs. UCAL is driven by technology; fully alive to the challenges of the ever-changing industry. Advanced technology is forefront in our thought processes; our endeavor is to offer new and better solutions, every time we deliver.\n\n    </p>\n\n  \n\n    <p ion-text>\n\n        With its expertise in automotive components, UCAL Group has been providing customers with end - to - end solution from product designing to analysis, prototyping, testing and validation services. The company has one of the most advanced R & D centers in the industry. The R&D center, named, KRISHNAMURTHY CENTRE FOR AUTOMOTIVE TECHNOLOGY (KCAT) located in Ambattur, Chennai is recognized by the Department of Scientific and Industrial Research, Government of India. The Manufacturing facilities in 5 locations - 3 in Tamil Nadu, 1 in Pondicherry and one in Haryana are stat of the art.\n\n      </p>\n\n\n\n      <p ion-text>\n\n          UCAL has achieved several milestones right from its inception in 1985.UCAL has, since been a preferred supplier for some of the top OEMs such as <b> Maruti Udyog, Hyundai, Cummins, Bosch, Mikuni, General Motors, TVS Motor Company, Bajaj Auto, Suzuki, Yamaha, Hero Honda Motors, etc. </b>\n\n        </p>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\eCatalogueRepo\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnquiryPage = /** @class */ (function () {
    function EnquiryPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.enquiry = {};
    }
    EnquiryPage.prototype.logForm = function () {
        console.log(this.enquiry);
    };
    EnquiryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\eCatalogueRepo\src\pages\enquiry\enquiry.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Enquiry</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="logForm()">\n\n    <ion-item>\n\n      <ion-label>Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="enquiry.name" name="name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Email</ion-label>\n\n      <ion-input type="text" [(ngModel)]="enquiry.email" name="email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Phone Number</ion-label>\n\n      <ion-input type="text" [(ngModel)]="enquiry.phone" name="phone"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Description</ion-label>\n\n      <ion-textarea [(ngModel)]="enquiry.description" name="description"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <button ion-button type="submit" block>Send Enquiry</button>\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\eCatalogueRepo\src\pages\enquiry\enquiry.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], EnquiryPage);
    return EnquiryPage;
}());

//# sourceMappingURL=enquiry.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_productList_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_manufacturerList_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modelList_list__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_productDetails_card__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_enquiry_enquiry__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var firebaseConfig = {
    apiKey: "AIzaSyAY4_9moLsRouKzMyZBDkb--5i8N71h96U",
    authDomain: "ucalproject.firebaseapp.com",
    databaseURL: "https://ucalproject.firebaseio.com",
    projectId: "ucalproject",
    storageBucket: "ucalproject.appspot.com",
    messagingSenderId: "204990184677"
};
__WEBPACK_IMPORTED_MODULE_15_firebase__["initializeApp"](firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_productList_list__["a" /* ProductListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_manufacturerList_list__["a" /* ManufacturerListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modelList_list__["a" /* ModelListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_productDetails_card__["a" /* ProductDetailsCard */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_enquiry_enquiry__["a" /* EnquiryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_productList_list__["a" /* ProductListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_manufacturerList_list__["a" /* ManufacturerListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modelList_list__["a" /* ModelListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_productDetails_card__["a" /* ProductDetailsCard */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_enquiry_enquiry__["a" /* EnquiryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_enquiry_enquiry__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.showSplash = true; // <-- show animation
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Contact', component: __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */] },
            { title: 'Enquiry', component: __WEBPACK_IMPORTED_MODULE_8__pages_enquiry_enquiry__["a" /* EnquiryPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; }); // <-- hide animation after 3s
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\eCatalogueRepo\src\app\app.html"*/'<div *ngIf="showSplash" class="splash">\n\n    <div class="spinner"></div>\n\n  </div>\n\n  \n\n<ion-menu [content]="content" >\n\n  <ion-header>\n\n    <ion-toolbar color="primary">\n\n      <ion-title  >Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\eCatalogueRepo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
        this.manufacturers = new Array();
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map