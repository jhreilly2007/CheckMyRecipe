import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CardDisplayPage } from '../card-display/card-display';
import { RecipeInfoPage } from '../recipe-info/recipe-info';
/**
 * Generated class for the AllergiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allergies',
  templateUrl: 'allergies.html',
})
export class AllergiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllergiesPage');
  }

public goToHome()
{
	this.navCtrl.push(HomePage);
}
public goToCardDisplay()
{
	this.navCtrl.push(CardDisplayPage);
}
public goToRecipeInfo()
{
	this.navCtrl.push(RecipeInfoPage);
}
}
