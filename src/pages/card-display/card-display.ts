import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AllergiesPage } from '../allergies/allergies';
import { RecipeInfoPage } from '../recipe-info/recipe-info';
import { RestProvider } from '../../providers/rest/rest';
import { SearchparamsProvider } from '../../providers/searchparams/searchparams';
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

  selectedObject: any;
  
  recipeData: any;
  recipeList = new Array();

 // searches: string = "cauliflower,cheese";
  //ingredientList = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public theSearch: SearchparamsProvider) {
    this.getDataObjectsFromPromise();
  }

 

  getDataObjectsFromPromise(){
    this.restProvider.getDataFromAPIViaPromise().then(
      data => {console.log("Trying to access results from the Promise return");
      this.recipeData = data;
      console.log("Got results from the Promise");
      for(var i = 0; i < this.recipeData.hits.length; i++){
      this.recipeList[i] = {
        "name": this.recipeData.hits[i].recipe.label,
        "url": this.recipeData.hits[i].recipe.url,
        "icon": this.recipeData.hits[i].recipe.image,
        "source": this.recipeData.hits[i].recipe.source,
        "ingredients": this.recipeData.hits[i].recipe.ingredientLines
      };
     // console.log(this.url);
    };
    });
  }

   displayJSONdata(clickedObject: any): void {
    this.selectedObject = clickedObject
    console.log("Assigned the JSON object in the Click Event from card-display.html");
    this.navCtrl.push(RecipeInfoPage,
    {
      ourParam: this.selectedObject
    }
    );
  }

  /*getRecipeFromData(){
    for(var i = 0; i < this.recipeData.hits.length; i++){
      this.recipeList[i] = {
        "name": recipeData.hits[i].recipe.label,
        "url": recipeData.hits[i].recipe.url,
        "icon": recipeData[i].recipe.image
      };
    };
    //insert nested for loop to get ingredients list
  }*/

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
