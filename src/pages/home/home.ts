import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AllergiesPage } from '../allergies/allergies';
import { CardDisplayPage } from '../card-display/card-display';
import { RecipeInfoPage } from '../recipe-info/recipe-info';
import { SearchparamsProvider } from '../../providers/searchparams/searchparams';

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
  /**
   * 
   * @param term is taken from the search template and added to the search params provider. 
   * splits value of term, and then joins these with a comma.
   * when search button is clicked navigation goes to allergies page
   */
  search(term: string) {
    this.theSearch.searchInput = term.split(' ').join(',');
    this.navCtrl.push(AllergiesPage)
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
}
