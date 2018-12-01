import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllergiesPage } from '../allergies/allergies';
import { SearchparamsProvider } from '../../providers/searchparams/searchparams';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
/**
 * inchecks the providers and injects into the constructor for search     Brona
 */
export class SearchPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public searchParams: SearchparamsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  /**
   * 
   * @param term is taken from the search template and added to the search params provider. 
   * splits value of term, and then joins these with a comma.
   * when search button is clicked navigation goes to allergies page
   */
  search(term: string) {
    this.searchParams.searchInput = term.split(' ').join(',');
    this.navCtrl.push(AllergiesPage)
  }

}
