
import { Injectable } from '@angular/core';
import { AllergiesPage } from '../../allergies/allergies';
import { CardDisplayPage } from '../../card-display/card-display';
import { HomePage } from '../../home/home';
/*
  Generated class for the SearchparamsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchparamsProvider {

	//checklist options for allergies.html
	optionsAllergies: any[] = new Array();
	optionsDietary: any[] = new Array();

	//user choices arrays
	searchAllergies: any[] = new Array();
	searchDietary: any[] = new Array();
	searchIngredients: any[] = new Array();
	searchIngredientsString: string = "";
	searchHealthString: string = "";

  constructor() {
    var allergies1 = {"allergiesName": "celery-free"};
   	var allergies2 = {"allergiesName": "crustacean-free"};
   	var allergies3 = {"allergiesName": "dairy-free"};
   	var allergies4 = {"allergiesName": "egg-free"};
   	var allergies5 = {"allergiesName": "fish-free"};
   	var allergies6 = {"allergiesName": "gluten-free"};
   	var allergies7 = {"allergiesName": "lupine-free"};
   	var allergies8 = {"allergiesName": "mustard-free"};
   	var allergies9 = {"allergiesName": "peanut-free"};
   	var allergies10 = {"allergiesName": "sesame-free"};
   	var allergies11 = {"allergiesName": "shellfish-free"};
   	var allergies12 = {"allergiesName": "soy-free"};
   	var allergies13 = {"allergiesName": "tree-nut-free"}
   	var allergies14 = {"allergiesName": "wheat-free"}
  	this.optionsAllergies.push(allergies1);
  	this.optionsAllergies.push(allergies2);
  	this.optionsAllergies.push(allergies3);
  	this.optionsAllergies.push(allergies4);
  	this.optionsAllergies.push(allergies5);
  	this.optionsAllergies.push(allergies6);
  	this.optionsAllergies.push(allergies7);
  	this.optionsAllergies.push(allergies8);
  	this.optionsAllergies.push(allergies9);
  	this.optionsAllergies.push(allergies10);
  	this.optionsAllergies.push(allergies11);
  	this.optionsAllergies.push(allergies12);
  	this.optionsAllergies.push(allergies13);
  	this.optionsAllergies.push(allergies14);
  	var dietary1 = {"dietaryName": "kosher"};
   	var dietary2 = {"dietaryName": "paleo"};
   	var dietary3 = {"dietaryName": "pescatarian"};
   	var dietary4 = {"dietaryName": "vegan"};
   	var dietary5 = {"dietaryName": "vegetarian"};
   	this.optionsDietary.push(dietary1);
   	this.optionsDietary.push(dietary2);
   	this.optionsDietary.push(dietary3);
   	this.optionsDietary.push(dietary4);
   	this.optionsDietary.push(dietary5);
  }
 /* get methods for the options for the interface */

  public getOptionsAllergies()
  {
    return this.optionsAllergies;
  }

  public getOptionsDietary()
  {
    return this.optionsDietary;
  }

 /* allergy methods */
  public deleteAllergy(allergiesObj)
  {
    let index = this.searchAllergies.indexOf(allergiesObj, 0);
    
    if (index > -1) {
       this.searchAllergies.splice(index, 1);
  
    }
  }
  public addAllergy(allergiesObj)
  {
    if (this.searchAllergies.indexOf(allergiesObj.allergiesName) < 0)
    {
      this.searchAllergies.push(allergiesObj);
    }
    else
    {  
    /*This is when user clicks/taps on an 
      already added allergy */
      this.deleteAllergy(allergiesObj);  
    }
  }
  // check if a specific allergy has already been selected by user 
  public isAllergySelectedByUser(allergiesObj)
  {
    if (this.searchAllergies.indexOf(allergiesObj) < 0)
    {
      return false;
    }    
    else
    {
      return true;
    }
  }

  /* dietary methods */

    public deleteDietary(dietaryObj)
  {
    let index = this.searchDietary.indexOf(dietaryObj, 0);
    
    if (index > -1) {
       this.searchDietary.splice(index, 1);
  
    }
  }
  public addDietary(dietaryObj)
  {
    if (this.searchDietary.indexOf(dietaryObj.dietaryName) < 0)
    {
      this.searchDietary.push(dietaryObj);
    }
    else
    {  
    //This is when user clicks/taps on an 
     // already added dietary option
      this.deleteDietary(dietaryObj);  
    }
  }
  // check if a specific dietary option has already been selected by user 
  public isDietarySelectedByUser(dietaryObj)
  {
    if (this.searchDietary.indexOf(dietaryObj) < 0)
    {
      return false;
    }    
    else
    {
      return true;
    }
  }

//   /* return a boolean value to indicate if this allergiesObj
//      has been already selected by the user or not 

  // public checkIfAllergyIsSelected(allergiesObj)
  // {
    
  //   let index = this.searchAllergies.indexOf(allergiesObj, 0);
  
  //   return (index > -1);   /* this will be true or false 
  // }

// // set arrays and strings from arrays (use in home and allergies)
//   public setSearchIngredientsString()
//   {
//   	if(this.searchIngredients.length !== 0){
//   		this.searchIngredientsString = this.searchIngredients[0];
//   	  for(int i = 1; i < this.searchIngredients.length; i++){
//   	  	this.searchIngredientsString = this.searchIngredientsString + "," + this.searchIngredients[i];
//   	  }
//   	}
//   }

//   public setSearchHealthString()
//   {
//   	if(this.searchAllergies.length !== 0){
//   		this.searchHealthString = this.searchAllergies[0].allergiesName;
//   	  for(int i = 1; i < this.searchAllergies.length; i++){
//   	  	this.searchHealthString = this.searchHealthString + "," + this.searchAllergies[i].allergiesName;
//   	  }
//   	}
//   	if(this.searchDietary.length !== 0){
//   		this.searchHealthString = this.searchHealthString + "," + this.searchDietary[0].dietaryName;
//   	  for(int i = 1; i < this.searchAllergies.length; i++){
//   	  	this.searchHealthString = this.searchHealthString + "," + this.searchDietary[i].dietaryName;
//   	  }
//   	}
//   }


// // clear all selections
//  public clearAllChoices()
//   {
//   	this.searchHealth = new Array();
//   }

// }
// */
//     multiple toppings*/
//   /* Delete a topping object, if it is in the array */
}