import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, AlertController, Nav } from 'ionic-angular';
import { ListPage } from '../list/list';
import firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }
  @ViewChild(Nav) nav: Nav;
  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  signIn(phoneNumber: number) {
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+" + phoneNumber;
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

    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).

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
                // Here we need to handle the confirmation code
                confirmationResult.confirm(data.confirmationCode)
                  .then( (result)=> {
                    // User signed in successfully.
                    console.log(result.user);
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
      })
      .catch(function (error) {
        alert(error);
        console.error("SMS not sent", error);
      });

  }
}
