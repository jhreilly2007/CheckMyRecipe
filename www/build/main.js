webpackJsonp([5],{

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		403,
		4
	],
	"../pages/allergies/allergies.module": [
		404,
		3
	],
	"../pages/card-display/card-display.module": [
		405,
		2
	],
	"../pages/faq/faq.module": [
		406,
		1
	],
	"../pages/recipe-info/recipe-info.module": [
		407,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 185;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        /* Base Url */
        this.OUR_REST_API_URL = "https://api.edamam.com/search?app_id=586b6a86&app_key=7ee60a3315e2c4fef3742021fabba111";
    }
    RestProvider.prototype.getDataFromAPI = function (searchTerm, allergy, dietary) {
        if (allergy === void 0) { allergy = []; }
        if (dietary === void 0) { dietary = []; }
        /* used array spread syntax (expands the array into it's elements) and join on &health= as per url
         search params */
        var health = allergy.concat(dietary).join("&health=");
        /*get the JSON data with user selected search terms (ingredients are in searchTerm, allergies
        and dietary choices in health) */
        return this.http.get("" + this.OUR_REST_API_URL + (searchTerm ? "&q=" + searchTerm : "") + (health ? "&health=" + health : ""));
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\pages\about\about.html"*/'<!--\n\n  Generated template for the AboutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>About</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\pages\faq\faq.html"*/'<!--\n\n  Generated template for the FaqPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Faq</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\pages\faq\faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(256);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_allergies_allergies__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_card_display_card_display__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_faq_faq__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recipe_info_recipe_info__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_rest_rest__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_searchparams_searchparams__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_8__pages_allergies_allergies__["a" /* AllergiesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_card_display_card_display__["a" /* CardDisplayPage */], __WEBPACK_IMPORTED_MODULE_10__pages_faq_faq__["a" /* FaqPage */], __WEBPACK_IMPORTED_MODULE_11__pages_recipe_info_recipe_info__["a" /* RecipeInfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allergies/allergies.module#AllergiesPageModule', name: 'AllergiesPage', segment: 'allergies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/card-display/card-display.module#CardDisplayPageModule', name: 'CardDisplayPage', segment: 'card-display', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recipe-info/recipe-info.module#RecipeInfoPageModule', name: 'RecipeInfoPage', segment: 'recipe-info', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_8__pages_allergies_allergies__["a" /* AllergiesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_card_display_card_display__["a" /* CardDisplayPage */], __WEBPACK_IMPORTED_MODULE_10__pages_faq_faq__["a" /* FaqPage */], __WEBPACK_IMPORTED_MODULE_11__pages_recipe_info_recipe_info__["a" /* RecipeInfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_searchparams_searchparams__["a" /* SearchparamsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allergies_allergies__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_searchparams_searchparams__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, toastCtrl, theSearch) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.theSearch = theSearch;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad HomePage");
    };
    /* term is taken from the search template and added to the search params provider.
      splits value of term, and then joins these with a comma.
      when search button is clicked navigation goes to allergies page
     */
    HomePage.prototype.search = function (term) {
        if (!term) {
            var toast = this.toastCtrl.create({
                message: "Please fill in the search",
                duration: 3000,
                position: "top"
            });
            toast.present();
        }
        else {
            this.theSearch.searchInput = term.split(" ").join(",");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__allergies_allergies__["a" /* AllergiesPage */]);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Check My Recipe\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <img class="rounded img-fluid" id ="logo" src="../assets/imgs/cmrlogo.PNG"/>\n\n    <p id="homePageP">Search over 2 million recipes!</p>\n\n  </ion-item>\n\n  <ion-item>\n\n    \n\n    <ion-input #term type="text" placeholder="Enter ingredients or meals here..."></ion-input>\n\n    <!--when button is clicked search method called with value of input box-->\n\n  </ion-item>\n\n\n\n\n\n  <div id="homeButton">\n\n    <button ion-button round full color="danger" (click)="search(term.value)">Search</button>\n\n   </div>\n\n<!-- changed the button style -->\n\n\n\n<div id="edamam-badge" data-color="transparent" style="position:fixed; bottom:30px; display:block; margin:auto"></div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_searchparams_searchparams__["a" /* SearchparamsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchparamsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// ^
/*
  Generated class for the SearchparamsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SearchparamsProvider = /** @class */ (function () {
    function SearchparamsProvider() {
        this.searchInput = ""; //added a field to hold the input for the search page (seperated by commas) Brona
        //checklist options for allergies.html
        this.optionsAllergies = new Array();
        this.optionsDietary = new Array();
        this.optionsBlockedAllergies = new Array();
        this.optionsBlockedDietary = new Array();
        //user choices arrays
        this.searchAllergies = new Array();
        this.searchDietary = new Array();
        this.searchIngredients = new Array();
        this.searchIngredientsString = "";
        this.searchHealthString = "";
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
        ];
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
        ];
    }
    /* get methods for the options for the interface */
    SearchparamsProvider.prototype.getOptionsAllergies = function () {
        return this.optionsAllergies;
    };
    SearchparamsProvider.prototype.getOptionsDietary = function () {
        return this.optionsDietary;
    };
    SearchparamsProvider.prototype.getBlockedOptionsAllergies = function () {
        return this.optionsBlockedAllergies;
    };
    SearchparamsProvider.prototype.getBlockedOptionsDietary = function () {
        return this.optionsBlockedDietary;
    };
    /* allergy methods */
    SearchparamsProvider.prototype.deleteAllergy = function (allergy) {
        var index = this.searchAllergies.indexOf(allergy);
        if (index > -1) {
            this.searchAllergies.splice(index, 1);
        }
    };
    SearchparamsProvider.prototype.addAllergy = function (allergy) {
        if (this.searchAllergies.indexOf(allergy) < 0) {
            this.searchAllergies.push(allergy);
        }
        else {
            /*This is when user clicks/taps on an
            already added allergy */
            this.deleteAllergy(allergy);
        }
    };
    // check if a specific allergy has already been selected by user
    SearchparamsProvider.prototype.isAllergySelectedByUser = function (allergy) {
        if (this.searchAllergies.indexOf(allergy) < 0) {
            return false;
        }
        else {
            return true;
        }
    };
    /* dietary methods */
    SearchparamsProvider.prototype.deleteDietary = function (diet) {
        var index = this.searchDietary.indexOf(diet);
        if (index > -1) {
            this.searchDietary.splice(index, 1);
        }
    };
    SearchparamsProvider.prototype.addDietary = function (diet) {
        if (this.searchDietary.indexOf(diet) < 0) {
            this.searchDietary.push(diet);
        }
        else {
            //This is when user clicks/taps on an
            // already added dietary option
            this.deleteDietary(diet);
        }
    };
    // check if a specific dietary option has already been selected by user
    SearchparamsProvider.prototype.isDietarySelectedByUser = function (diet) {
        if (this.searchDietary.indexOf(diet) < 0) {
            return false;
        }
        else {
            return true;
        }
    };
    SearchparamsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SearchparamsProvider);
    return SearchparamsProvider;
}());

//# sourceMappingURL=searchparams.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_display_card_display__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_info_recipe_info__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_searchparams_searchparams__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AllergiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllergiesPage = /** @class */ (function () {
    function AllergiesPage(navCtrl, navParams, theSearch) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.theSearch = theSearch;
    }
    AllergiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllergiesPage');
    };
    AllergiesPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AllergiesPage.prototype.goToCardDisplay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__card_display_card_display__["a" /* CardDisplayPage */]);
    };
    AllergiesPage.prototype.goToRecipeInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recipe_info_recipe_info__["a" /* RecipeInfoPage */]);
    };
    AllergiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-allergies',template:/*ion-inline-start:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\pages\allergies\allergies.html"*/'<ion-header>\n\n  <ion-navbar color="t_white">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>  \n\n    <ion-title> Preferences </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div class="tab-wrap">\n\n  \n\n    <input type="radio" name="tabs" id="tab1" checked>\n\n    <div class="tab-label-content" id="tab1-content">\n\n      <label class="tab-label" for="tab1"> Dietary Requirements </label>\n\n      <div class="tab-content">\n\n      	<ion-list inset>\n\n			<!-- used list of strings instead of object for diet list -->\n\n		  <ion-item [ngClass]="{dietaryChosen: theSearch.isDietarySelectedByUser(diet)}" *ngFor="let diet of theSearch.getOptionsDietary()">\n\n		    <ion-label><b>{{diet}}</b>\n\n		    </ion-label>\n\n		    <ion-checkbox [checked] = "theSearch.isDietarySelectedByUser(diet)" (ionChange)="theSearch.addDietary(diet)"></ion-checkbox>\n\n		</ion-item>\n\n		    <ion-item *ngFor="let item of theSearch.getBlockedOptionsDietary()">\n\n		    	<ion-label><b>{{item}}</b>\n\n		    	</ion-label>\n\n		    	<ion-checkbox disabled="true"></ion-checkbox>\n\n		  </ion-item>\n\n		</ion-list>\n\n			\n\n	  </div>\n\n    </div> \n\n\n\n\n\n	<input type="radio" name="tabs" id="tab2">\n\n    <div class="tab-label-content" id="tab2-content">\n\n      <label class="tab-label" for="tab2"> Allergies </label>\n\n      <div class="tab-content">\n\n      	<ion-list inset>\n\n			<!-- used list of strings instead of object for allergy list -->\n\n		  <ion-item [ngClass]="{allergyChosen: theSearch.isAllergySelectedByUser(allergy)}" *ngFor="let allergy of theSearch.getOptionsAllergies()">\n\n		    <ion-label><b>{{allergy}}</b>\n\n		    </ion-label>\n\n		    <ion-checkbox [checked] = "theSearch.isAllergySelectedByUser(allergy)" (ionChange)="theSearch.addAllergy(allergy)"></ion-checkbox>\n\n		  </ion-item>\n\n		     <ion-item *ngFor="let item of theSearch.getBlockedOptionsAllergies()">\n\n		    	<ion-label><b>{{item}}</b>\n\n		    	</ion-label>\n\n		    	<ion-checkbox disabled="true"></ion-checkbox>\n\n		  </ion-item>\n\n		</ion-list> \n\n		\n\n	  </div>\n\n    </div>\n\n\n\n <div class="slide"></div>\n\n\n\n</div>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer no border>\n\n	<div id = "button">\n\n		<button ion-button round full color="danger" (click) = "goToCardDisplay()" id="seeRecipes">SEE RECIPES</button>\n\n 	</div>\n\n</ion-footer>  '/*ion-inline-end:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\pages\allergies\allergies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_searchparams_searchparams__["a" /* SearchparamsProvider */]])
    ], AllergiesPage);
    return AllergiesPage;
}());

//# sourceMappingURL=allergies.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDisplayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_info_recipe_info__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_searchparams_searchparams__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AllergiesPage } from "../allergies/allergies";




/**
 * Generated class for the CardDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardDisplayPage = /** @class */ (function () {
    function CardDisplayPage(navCtrl, navParams, loadingCtrl, restProvider, theSearch) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.theSearch = theSearch;
        // recipeData: any;
        this.recipeList = new Array();
        // create a component loading indicator in constructor
        this.loading = loadingCtrl.create({
            content: "Please wait..."
        });
    }
    /* Clicking on a card displays that particular object on recipe-info display and passes the object
    via navparam. The declared selectedObject points to the clickObject and that's what's passed */
    CardDisplayPage.prototype.displayJSONdata = function (clickedObject) {
        this.selectedObject = clickedObject;
        console.log("Assigned the JSON object in the Click Event from card-display.html");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recipe_info_recipe_info__["a" /* RecipeInfoPage */], {
            ourParam: this.selectedObject
        });
    };
    /* used ngOnInit rather than the constructor to start data request. Best pratice to have logic
     done in ngOnInit - also easier to test and debug (angular docs) */
    CardDisplayPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loading.present(); // added a spinner - Brona
        this.subscription = this.restProvider
            .getDataFromAPI(
        // request the api with the search terms as paramaters
        this.theSearch.searchInput, this.theSearch.searchAllergies, this.theSearch.searchDietary)
            .pipe(//pipe() lets us combine multiple functions into a single function
        // transform the data to the right shape and puts it into an array using the RXJS map and mergeMap functions
        Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["mergeMap"])(function (x) { return x.hits; }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (x) { return x.recipe; }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (x) { return ({
            name: x.label,
            url: x.url,
            icon: x.image,
            source: x.source,
            ingredients: x.ingredientLines,
            time: x.totalTime,
            nutrients: x.totalNutrients
        }); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["toArray"])())
            .subscribe(function (data) { return (_this.recipeList = data); }, // set the data when it arrives
        function (// set the data when it arrives
            err) {
            console.error("here", err);
            _this.loading.dismiss();
            // this.navCtrl.pop();
        }, function () { return _this.loading.dismiss(); } // remove the spinner when request is complete
        );
    };
    CardDisplayPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe(); // cancel the request to clean up (have to manually unsubscribe now that we're not using promise)
    };
    CardDisplayPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CardDisplayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-card-display",template:/*ion-inline-start:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\pages\card-display\card-display.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Search Results</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n	<!-- Display JSON data from API on cards -->\n\n		<ion-card *ngFor="let result of recipeList" (click)="displayJSONdata(result)">\n\n			<img src={{result.icon}}>\n\n			<ion-card-content>\n\n				<ion-card-title>\n\n					{{result.name}}\n\n				</ion-card-title>\n\n				<ion-row>\n\n				<ion-col text-left>				\n\n\n\n				<p><ion-icon name="time"></ion-icon> {{result.time}} minutes</p>\n\n\n\n			</ion-col>\n\n			<ion-col text-right>\n\n				<!-- display calories rounded down -->\n\n				<p>{{result.nutrients.ENERC_KCAL.quantity|number:\'1.0-0\'}} calories</p>		\n\n			</ion-col>\n\n		</ion-row>\n\n			\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n<!-- if we are not currently fetching and no results are returned from the search - display message to user -->\n\n<ion-card *ngIf="!fetching && recipeList.length<=0" text-center (click)="goToHome()">\n\n			<div><h1>Your search didn\'t return any results.</h1><h2> Click here to start over. Be careful with spelling!</h2></div>\n\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\pages\card-display\card-display.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_searchparams_searchparams__["a" /* SearchparamsProvider */]])
    ], CardDisplayPage);
    return CardDisplayPage;
}());

//# sourceMappingURL=card-display.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__allergies_allergies__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_display_card_display__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RecipeInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecipeInfoPage = /** @class */ (function () {
    function RecipeInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.passedObject = this.navParams.get('ourParam');
    }
    RecipeInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecipeInfoPage');
    };
    RecipeInfoPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    RecipeInfoPage.prototype.goToCardDisplay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__card_display_card_display__["a" /* CardDisplayPage */]);
    };
    RecipeInfoPage.prototype.goToAllergies = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__allergies_allergies__["a" /* AllergiesPage */]);
    };
    RecipeInfoPage.prototype.navigateBack = function () {
        this.navCtrl.pop();
    };
    /*public goToURL(){
       // need something here to navigate outside of app (follow eternal url)
       }*/
    RecipeInfoPage.prototype.openUrl = function (theUrl) {
        window.open(theUrl);
    };
    RecipeInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipe-info',template:/*ion-inline-start:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\pages\recipe-info\recipe-info.html"*/'<ion-header>\n\n  <ion-navbar color="t_white">\n\n\n\n    <ion-title>{{passedObject.name}}</ion-title>\n\n\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6>\n\n\n\n        <img src="{{passedObject.icon}}" style="float:left;width:100%;height:325px;"/>\n\n\n\n      </ion-col>\n\n\n\n\n\n      <ion-col col-12 col-md-6>\n\n                 \n\n        <h1>{{passedObject.name}}</h1>\n\n\n\n             <ion-row>\n\n               <ion-icon name="time"></ion-icon> {{passedObject.time}} minutes\n\n            </ion-row>\n\n\n\n           <h2> Ingredients: </h2>\n\n\n\n\n\n           <ion-row *ngFor="let ingredient of passedObject.ingredients">{{ingredient}}</ion-row>\n\n              \n\n\n\n              <!--<a button href="{{passedObject.url}}" clear>\n\n                <button ion-button full color="danger">Check My Recipe</button></a>-->\n\n          \n\n            <ion-item>\n\n              <button ion-button full color="danger" (click)="openUrl(passedObject.url)">Check My Recipe</button>\n\n\n\n              <p><i>Recipe available from the {{passedObject.source}} website</i></p>\n\n             </ion-item>\n\n\n\n\n\n          </ion-col>\n\n\n\n            \n\n  </ion-row>\n\n\n\n\n\n    <ion-row>\n\n      <ion-col col-4 col-md-2>\n\n        \n\n        <div class = "line">\n\n          <p class = "word"> <!--{{passedObject.nutrients.ENERC_KCAL.label|titlecase}}--> Calories  </p>\n\n        </div>\n\n        <p class = "info">{{passedObject.nutrients.ENERC_KCAL.quantity|number:\'1.0-0\'}}{{passedObject.nutrients.ENERC_KCAL.unit}}</p>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col col-4 col-md-2>\n\n        <div class = "line">\n\n          <p class = "word"> <!--{{passedObject.nutrients.SUGAR.label|titlecase}}--> Sugar </p>\n\n        </div>\n\n        <p class = "info"> {{passedObject.nutrients.SUGAR.quantity|number:\'1.0-0\'}}{{passedObject.nutrients.SUGAR.unit}}</p>\n\n      </ion-col>\n\n\n\n      \n\n      <ion-col col-4 col-md-2>\n\n         <div class = "line">\n\n          <p class = "word"> <!--{{passedObject.nutrients.FAT.label|titlecase}}--> Fat </p>\n\n        </div>\n\n        <p class = "info"> {{passedObject.nutrients.FAT.quantity|number:\'1.0-0\'}}{{passedObject.nutrients.FAT.unit}}</p>\n\n      </ion-col>\n\n\n\n\n\n      <ion-col col-4 col-md-2>\n\n          <div class = "line">\n\n           <p class = "word"> <!--{{passedObject.nutrients.CHOCDF.label|titlecase}}--> Carbs </p>\n\n        </div>\n\n        <p class = "info"> {{passedObject.nutrients.CHOCDF.quantity|number:\'1.0-0\'}}{{passedObject.nutrients.CHOCDF.unit}} </p>\n\n      </ion-col>\n\n\n\n\n\n      <ion-col col-4 col-md-2>\n\n           <div class = "line">\n\n           <p class = "word"> <!--{{passedObject.nutrients.PROCNT.label|titlecase}}--> Protein </p>\n\n        </div>\n\n        <p class = "info"> {{passedObject.nutrients.PROCNT.quantity|number:\'1.0-0\'}}{{passedObject.nutrients.PROCNT.unit}} </p>\n\n      </ion-col>\n\n\n\n\n\n      <ion-col col-4 col-md-2>\n\n            <div class = "line">\n\n            <p class = "word"> Salt </p>\n\n        </div>\n\n        <p class = "info"> {{passedObject.nutrients.NA.quantity|number:\'1.0-0\'}}{{passedObject.nutrients.NA.unit}} </p>\n\n      </ion-col>\n\n \n\n    </ion-row>\n\n      \n\n     <!--<div class = "clearfix">-->\n\n\n\n     <ion-fab top right>\n\n     <button ion-fab mini color="danger" (click) = "goToHome()"><ion-icon name="home"></ion-icon></button>\n\n     </ion-fab>\n\n\n\n        <!--<ion-fab top right>\n\n    <button ion-fab mini><ion-icon name="menu"></ion-icon></button>\n\n       <ion-fab-list side="left">\n\n      <button ion-fab><ion-icon name="exit"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="help"></ion-icon></button>\n\n        <!-- updated navigations -->\n\n       <!--<button ion-fab (click) = "navigateBack()"><ion-icon name="backspace"></ion-icon></button>\n\n       <button ion-fab (click) = "goToHome()"><ion-icon name="home"></ion-icon></button>\n\n    </ion-fab-list>\n\n      </ion-fab>-->\n\n\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Karen\Documents\HDip\CS385\CheckMyRecipe\src\pages\recipe-info\recipe-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RecipeInfoPage);
    return RecipeInfoPage;
}());

//# sourceMappingURL=recipe-info.js.map

/***/ })

},[248]);
//# sourceMappingURL=main.js.map