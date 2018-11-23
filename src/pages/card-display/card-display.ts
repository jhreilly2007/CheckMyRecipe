import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AllergiesPage } from '../allergies/allergies';
import { RecipeInfoPage } from '../recipe-info/recipe-info';
/**
 * Generated class for the CardDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-display',
  templateUrl: 'card-display.html',
})
export class CardDisplayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardDisplayPage');
  }
  public goToHome()
{
	this.navCtrl.push(HomePage);
}
public goToAllergies()
{
	this.navCtrl.push(AllergiesPage);
}
public goToRecipeInfo()
{
	this.navCtrl.push(RecipeInfoPage);
}

}
