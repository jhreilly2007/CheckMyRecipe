import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController,Loading} from "ionic-angular";
import { HomePage } from "../home/home";
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
  recipeList = new Array();
  fetching = false; // tracks if this component is currently fetching. Initially set to false

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public restProvider: RestProvider, public theSearch: SearchparamsProvider) {
    // create a component loading indicator in constructor
    this.loading = loadingCtrl.create({
      content: "Please wait..."
    });
  }
  /* Clicking on a card displays that particular object on recipe-info display and passes the object
  via navparam. The declared selectedObject points to the clickObject and that's what's passed */
  displayJSONdata(clickedObject: any): void {
    this.selectedObject = clickedObject;
    console.log(
      "Assigned the JSON object in the Click Event from card-display.html"
    );
    this.navCtrl.push(RecipeInfoPage, {
      ourParam: this.selectedObject
    });
  }
  /* used ngOnInit rather than the constructor to start data request. Best pratice to have logic
   done in ngOnInit - also easier to test and debug (angular docs) */
   //changed to ionViewDidLoad for practice in lifecycle hooks
  ionViewDidLoad() {
    this.loading.present(); // added a spinner - Brona
    
    this.fetching = true; // before fetching data set fetching field to true 
    this.subscription = this.restProvider 
      .getDataFromAPI(
        // request the api with the search terms as paramaters
        this.theSearch.searchInput, this.theSearch.searchAllergies, this.theSearch.searchDietary
      ) 
      .pipe( //pipe() lets us combine multiple functions into a single function
        // transform the data to the right shape and puts it into an array using the RXJS map and mergeMap functions
        mergeMap(x => x.hits),
        map(x => x.recipe),
        map(x => ({
          name: x.label,
          url: x.url,
          icon: x.image,
          source: x.source,
          ingredients: x.ingredientLines,
          time: x.totalTime,
          nutrients: x.totalNutrients
        })),
        toArray()
      )
      .subscribe(
        data => (this.recipeList = data), // set the data when it arrives
        err => {
          this.loading.dismiss();
          this.fetching = false; // if error set fetching to false
        },
        () => {
          this.loading.dismiss(); // remove the spinner when request is complete
          this.fetching = false; // if we get a successful response set fetching to false
        }
      );
  }
 

  ionViewWillLeave() {
    this.subscription.unsubscribe(); // cancel the request to clean up (have to manually unsubscribe now that we're not using promise)
  }

    public goToHome()
  {
    this.navCtrl.push(HomePage);
  }

}
