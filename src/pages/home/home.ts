import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AllergiesPage } from '../allergies/allergies';
import { CardDisplayPage } from '../card-display/card-display';
import { RecipeInfoPage } from '../recipe-info/recipe-info';
import { SearchparamsProvider } from '../../providers/searchparams/searchparams';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public theSearch: SearchparamsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  public goToRecipeInfo() {
    this.navCtrl.push(RecipeInfoPage);
  }
  public goToCardDisplay() {
    this.navCtrl.push(CardDisplayPage);
  }
  public goToAllergies() {
    this.navCtrl.push(AllergiesPage);
  } 
  public goToSearch() {
    this.navCtrl.push(SearchPage);
  }

}
