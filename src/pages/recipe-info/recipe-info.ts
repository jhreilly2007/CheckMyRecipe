import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AllergiesPage } from '../allergies/allergies';
import { CardDisplayPage } from '../card-display/card-display';

/**
 * Generated class for the RecipeInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-info',
  templateUrl: 'recipe-info.html',
})
export class RecipeInfoPage {

  passedObject: any;    //the object passed by navparams

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  this.passedObject = this.navParams.get('ourParam'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeInfoPage');
  }

public goToHome()
{
  this.navCtrl.push(HomePage);
}
public goToCardDisplay()
{
  this.navCtrl.push(CardDisplayPage);
}
public goToAllergies()
{
  this.navCtrl.push(AllergiesPage);
}
public navigateBack(){ // changed navigation to return to previous page rather than adding a new navigation
  this.navCtrl.pop();
}
/*public goToURL(){
   // need something here to navigate outside of app (follow eternal url)
   }*/
public openUrl(theUrl){ 
  const confirm = this.alertCtrl.create({ // added alert when leaving page Brona
    title: 'Alert',
    message: `You are about to navigate to the website:<br/> "${theUrl}"<br/> which is outside of this app`,
    buttons: [
      {
        text: 'Dismiss',
        handler: () => {}
      },
      {
        text: 'Confirm',
        handler: () => {
          window.open(theUrl); 
        }
      }
    ]
  });
  confirm.present();
}

}
