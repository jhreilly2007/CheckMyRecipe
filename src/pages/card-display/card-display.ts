import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  Loading
} from "ionic-angular";
// import { HomePage } from "../home/home";
// import { AllergiesPage } from "../allergies/allergies";
import { RecipeInfoPage } from "../recipe-info/recipe-info";
import { RestProvider } from "../../providers/rest/rest";
import { SearchparamsProvider } from "../../providers/searchparams/searchparams";
import { map, mergeMap, toArray } from "rxjs/operators";
import { Subscription } from "rxjs/Subscription";
/**
 * Generated class for the CardDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-card-display",
  templateUrl: "card-display.html"
})
export class CardDisplayPage {
  subscription: Subscription;
  selectedObject: any;
  loading: Loading;
  // recipeData: any;
  recipeList = new Array();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public restProvider: RestProvider,
    public theSearch: SearchparamsProvider
  ) {
    // create a component loading indicator in constructor
    this.loading = loadingCtrl.create({
      content: "Please wait..."
    });
  }
  /* Clicking on a card displays that particular object on recipe-info display and passed the object
  via navparam */
  displayJSONdata(clickedObject: any): void {
    this.selectedObject = clickedObject;
    console.log(
      "Assigned the JSON object in the Click Event from card-display.html"
    );
    this.navCtrl.push(RecipeInfoPage, {
      ourParam: this.selectedObject
    });
  }
  // used ng init rather than the constructor to start data request
  ngOnInit() {
    this.loading.present(); // added a spinner

    this.subscription = this.restProvider // request can be cancelled if you store the subscription
      .getDataFromAPI(
        // request the api with the search terms
        this.theSearch.searchInput,
        this.theSearch.searchAllergies,
        this.theSearch.searchDietary
      )
      .pipe(
        // transform the data to the right shape
        mergeMap(x => x.hits),
        map(x => x.recipe),
        map(x => ({
          name: x.label,
          url: x.url,
          icon: x.image,
          source: x.source,
          ingredients: x.ingredientLines,
          nutrients: x.totalNutrients
        })),
        toArray()
      )
      .subscribe(
        data => (this.recipeList = data), // set the data when it arrives
        err => {
          console.error("here", err); // sometimes the api gives an error, should handle this with a message to user maybe
          this.loading.dismiss();

          // this.navCtrl.pop();
        },
        () => this.loading.dismiss() // remove the spinner when request is complete
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe(); // cancel the request to clean up
  }
}
