import { Injectable } from "@angular/core";
// ^
/*
  Generated class for the SearchparamsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchparamsProvider {
  searchInput: string = ""; //added a field to hold the input for the search page (seperated by commas) Brona
  //checklist options for allergies.html
  optionsAllergies: any[] = new Array();
  optionsDietary: any[] = new Array();
  optionsBlockedAllergies: any[] = new Array();
  optionsBlockedDietary: any[] = new Array();

  //user choices arrays
  searchAllergies: any[] = new Array();
  searchDietary: any[] = new Array();
  searchIngredients: any[] = new Array();
  searchIngredientsString: string = "";
  searchHealthString: string = "";


  //the commented options below are blocked in the free version of the API
  constructor() {
    this.optionsAllergies = [   
      //"celery-free",
      //"crustacean-free",
      //"dairy-free",
      //"egg-free",
      //"fish-free",
      //"gluten-free",
      //"lupine-free",
      //"mustard-free",
      "peanut-free",
      //"sesame-free",
      //"shellfish-free",
      //"soy-free",
      "tree-nut-free",
      //"wheat-free"
    ];
    this.optionsBlockedAllergies = [
      "celery-free",
      "crustacean-free",
      "dairy-free",
      "egg-free",
      "fish-free",
      "gluten-free",
      "lupine-free",
      "mustard-free",
      "sesame-free",
      "shellfish-free",
      "soy-free",
      "wheat-free"
    ]
    this.optionsDietary = [
      //"kosher",
      //"paleo",
      //"pescatarian",
      "vegan",
      "vegetarian",
      "sugar-conscious",
      "alcohol-free"
    ];
    this.optionsBlockedDietary = [
      "kosher",
      "paleo",
      "pescatarian"
    ]
  }
  /* get methods for the options for the interface */

  public getOptionsAllergies() {
    return this.optionsAllergies;
  }

  public getOptionsDietary() {
    return this.optionsDietary;
  }

  public getBlockedOptionsAllergies() {
    return this.optionsBlockedAllergies;
  }

  public getBlockedOptionsDietary() {
    return this.optionsBlockedDietary;
  }

  /* allergy methods */
  public deleteAllergy(allergy) {
    let index = this.searchAllergies.indexOf(allergy);

    if (index > -1) {
      this.searchAllergies.splice(index, 1);
    }
  }
  public addAllergy(allergy) {
    if (this.searchAllergies.indexOf(allergy) < 0) {
      this.searchAllergies.push(allergy);
    } else {
      /*This is when user clicks/taps on an 
      already added allergy */
      this.deleteAllergy(allergy);
    }
  }
  // check if a specific allergy has already been selected by user
  public isAllergySelectedByUser(allergy) {
    if (this.searchAllergies.indexOf(allergy) < 0) {
      return false;
    } else {
      return true;
    }
  }

  /* dietary methods */

  public deleteDietary(diet) {
    let index = this.searchDietary.indexOf(diet);

    if (index > -1) {
      this.searchDietary.splice(index, 1);
    }
  }
  public addDietary(diet) {
    if (this.searchDietary.indexOf(diet) < 0) {
      this.searchDietary.push(diet);
    } else {
      //This is when user clicks/taps on an
      // already added dietary option
      this.deleteDietary(diet);
    }
  }
  // check if a specific dietary option has already been selected by user
  public isDietarySelectedByUser(diet) {
    if (this.searchDietary.indexOf(diet) < 0) {
      return false;
    } else {
      return true;
    }
  }
}
 