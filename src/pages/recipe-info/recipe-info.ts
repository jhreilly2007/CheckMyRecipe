import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
}
