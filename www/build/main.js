webpackJsonp([6],{

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		287,
		12
	],
	"../pages/allergies/allergies.module": [
		282,
		11
	],
	"../pages/card-display/card-display.module": [
		283,
		10
	],
	"../pages/faq/faq.module": [
		284,
		9
	],
	"../pages/recipe-info/recipe-info.module": [
		285,
		8
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(117);
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
        /* Fixed url for testing */
        this.OUR_REST_API_URL = "https://api.edamam.com/search?q=spicy,chicken&app_id=094290e0&app_key=f6754f4874d157c5d9c45368bae02f6f&health=vegan";
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getDataFromAPIViaPromise = function () {
        var _this = this;
        //this.http.get(this.OUR_REST_API_URL).toPromise();			// This could be shorter code for below... possibly needs catch wherever it is called. Brona
        return new Promise(function (resolve) {
            //let url = "https://api.edamam.com/search?q=";
            _this.http.get(_this.OUR_REST_API_URL).subscribe(function (data) {
                resolve(data);
                console.log("Subscribed to the Data Promise");
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-faq',template:/*ion-inline-start:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\pages\faq\faq.html"*/'<!--\n\n  Generated template for the FaqPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Faq</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\pages\faq\faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\pages\about\about.html"*/'<!--\n\n  Generated template for the AboutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>About</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_allergies_allergies__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_card_display_card_display__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_faq_faq__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recipe_info_recipe_info__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_rest_rest__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_searchparams_searchparams__ = __webpack_require__(43);
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
                        { loadChildren: '../pages/allergies/allergies.module#AllergiesPageModule', name: 'AllergiesPage', segment: 'allergies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/card-display/card-display.module#CardDisplayPageModule', name: 'CardDisplayPage', segment: 'card-display', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recipe-info/recipe-info.module#RecipeInfoPageModule', name: 'RecipeInfoPage', segment: 'recipe-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] }
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

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(42);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_display_card_display__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_info_recipe_info__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_searchparams_searchparams__ = __webpack_require__(43);
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
            selector: 'page-allergies',template:/*ion-inline-start:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\pages\allergies\allergies.html"*/'<ion-header>\n\n  <ion-navbar color="t_white">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>  \n\n    <ion-title> Pick your food restrictions </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<!-- <h1>Allergies selection</h1>\n\n<div text-justify>\n\n<p>Select one or more allergies - your search results will only contain recipes flagged as safe for\n\n	this allergy. Go to the next tab to select dietary requirements, or hit SEE RECIPES to \n\ngo straight to your search results!  </p>\n\n</div>	 -->\n\n\n\n\n\n<ion-content padding>\n\n<div class="tab-wrap">\n\n  \n\n    <input type="radio" name="tabs" id="tab1" checked>\n\n    <div class="tab-label-content" id="tab1-content">\n\n      <label class="tab-label" for="tab1"> Allergies </label>\n\n      <div class="tab-content">\n\n\n\n		<ion-list inset>\n\n		  <ion-item [ngClass]="{allergyChosen: theSearch.isAllergySelectedByUser(tOption)}" *ngFor="let tOption of theSearch.getOptionsAllergies(); let i = index">\n\n		    <ion-label><b>{{tOption.allergiesName}}</b>\n\n		    </ion-label>\n\n		    <ion-checkbox [checked] = "theSearch.isAllergySelectedByUser(tOption)" (ionChange)="theSearch.addAllergy(tOption)"></ion-checkbox>\n\n		  </ion-item>\n\n		</ion-list>   	\n\n		\n\n	  </div>\n\n    </div> \n\n\n\n\n\n	<input type="radio" name="tabs" id="tab2">\n\n    <div class="tab-label-content" id="tab2-content">\n\n      <label class="tab-label" for="tab2"> Dietary Requirements </label>\n\n      <div class="tab-content">\n\n\n\n      		<ion-list inset>\n\n		  <ion-item [ngClass]="{dietaryChosen: theSearch.isDietarySelectedByUser(tOption)}" *ngFor="let tOption of theSearch.getOptionsDietary(); let i = index">\n\n		    <ion-label><b>{{tOption.dietaryName}}</b>\n\n		    </ion-label>\n\n		    <ion-checkbox [checked] = "theSearch.isDietarySelectedByUser(tOption)" (ionChange)="theSearch.addDietary(tOption)"></ion-checkbox>\n\n		  </ion-item>\n\n		</ion-list>   	\n\n		\n\n	  </div>\n\n    </div>\n\n\n\n <div class="slide"></div>\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n<ion-item>\n\n		<button ion-button round outline color="danger" (click) = "goToCardDisplay()">SEE RECIPES</button>\n\n</ion-item>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n     \n\n     \n\n    \n\n      	'/*ion-inline-end:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\pages\allergies\allergies.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_searchparams_searchparams__["a" /* SearchparamsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_searchparams_searchparams__["a" /* SearchparamsProvider */]) === "function" && _c || Object])
    ], AllergiesPage);
    return AllergiesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=allergies.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allergies_allergies__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_display_card_display__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_info_recipe_info__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_searchparams_searchparams__ = __webpack_require__(43);
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
    function HomePage(navCtrl, navParams, theSearch) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.theSearch = theSearch;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    /**
     *
     * @param term is taken from the search template and added to the search params provider.
     * splits value of term, and then joins these with a comma.
     * when search button is clicked navigation goes to allergies page
     */
    HomePage.prototype.search = function (term) {
        this.theSearch.searchInput = term.split(' ').join(',');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__allergies_allergies__["a" /* AllergiesPage */]);
    };
    HomePage.prototype.goToRecipeInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recipe_info_recipe_info__["a" /* RecipeInfoPage */]);
    };
    HomePage.prototype.goToCardDisplay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__card_display_card_display__["a" /* CardDisplayPage */]);
    };
    HomePage.prototype.goToAllergies = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__allergies_allergies__["a" /* AllergiesPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Check My Recipe\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-input #term type="text" placeholder="please enter a meal"></ion-input>\n\n    <!--when button is clicked search method called with value of input box-->\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <button ion-button round color="light" (click)="search(term.value)">Search</button>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <button ion-button round outline color="danger" (click)="goToAllergies()">Go To Allergies</button>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <button ion-button round outline color="danger" (click)="goToCardDisplay()">Go To Card Display</button>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <button ion-button round outline color="danger" (click)="goToRecipeInfo()">Go To Recipe Info</button>\n\n  </ion-item>\n\n\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_searchparams_searchparams__["a" /* SearchparamsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_searchparams_searchparams__["a" /* SearchparamsProvider */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 43:
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
        //user choices arrays
        this.searchAllergies = new Array();
        this.searchDietary = new Array();
        this.searchIngredients = new Array();
        this.searchIngredientsString = "";
        this.searchHealthString = "";
        var allergies1 = { "allergiesName": "celery-free" };
        var allergies2 = { "allergiesName": "crustacean-free" };
        var allergies3 = { "allergiesName": "dairy-free" };
        var allergies4 = { "allergiesName": "egg-free" };
        var allergies5 = { "allergiesName": "fish-free" };
        var allergies6 = { "allergiesName": "gluten-free" };
        var allergies7 = { "allergiesName": "lupine-free" };
        var allergies8 = { "allergiesName": "mustard-free" };
        var allergies9 = { "allergiesName": "peanut-free" };
        var allergies10 = { "allergiesName": "sesame-free" };
        var allergies11 = { "allergiesName": "shellfish-free" };
        var allergies12 = { "allergiesName": "soy-free" };
        var allergies13 = { "allergiesName": "tree-nut-free" };
        var allergies14 = { "allergiesName": "wheat-free" };
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
        var dietary1 = { "dietaryName": "kosher" };
        var dietary2 = { "dietaryName": "paleo" };
        var dietary3 = { "dietaryName": "pescatarian" };
        var dietary4 = { "dietaryName": "vegan" };
        var dietary5 = { "dietaryName": "vegetarian" };
        this.optionsDietary.push(dietary1);
        this.optionsDietary.push(dietary2);
        this.optionsDietary.push(dietary3);
        this.optionsDietary.push(dietary4);
        this.optionsDietary.push(dietary5);
    }
    /* get methods for the options for the interface */
    SearchparamsProvider.prototype.getOptionsAllergies = function () {
        return this.optionsAllergies;
    };
    SearchparamsProvider.prototype.getOptionsDietary = function () {
        return this.optionsDietary;
    };
    /* allergy methods */
    SearchparamsProvider.prototype.deleteAllergy = function (allergiesObj) {
        var index = this.searchAllergies.indexOf(allergiesObj, 0);
        if (index > -1) {
            this.searchAllergies.splice(index, 1);
        }
    };
    SearchparamsProvider.prototype.addAllergy = function (allergiesObj) {
        if (this.searchAllergies.indexOf(allergiesObj.allergiesName) < 0) {
            this.searchAllergies.push(allergiesObj);
        }
        else {
            /*This is when user clicks/taps on an
              already added allergy */
            this.deleteAllergy(allergiesObj);
        }
    };
    // check if a specific allergy has already been selected by user 
    SearchparamsProvider.prototype.isAllergySelectedByUser = function (allergiesObj) {
        if (this.searchAllergies.indexOf(allergiesObj) < 0) {
            return false;
        }
        else {
            return true;
        }
    };
    /* dietary methods */
    SearchparamsProvider.prototype.deleteDietary = function (dietaryObj) {
        var index = this.searchDietary.indexOf(dietaryObj, 0);
        if (index > -1) {
            this.searchDietary.splice(index, 1);
        }
    };
    SearchparamsProvider.prototype.addDietary = function (dietaryObj) {
        if (this.searchDietary.indexOf(dietaryObj.dietaryName) < 0) {
            this.searchDietary.push(dietaryObj);
        }
        else {
            //This is when user clicks/taps on an 
            // already added dietary option
            this.deleteDietary(dietaryObj);
        }
    };
    // check if a specific dietary option has already been selected by user 
    SearchparamsProvider.prototype.isDietarySelectedByUser = function (dietaryObj) {
        if (this.searchDietary.indexOf(dietaryObj) < 0) {
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDisplayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__allergies_allergies__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_info_recipe_info__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_searchparams_searchparams__ = __webpack_require__(43);
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
 * Generated class for the CardDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardDisplayPage = /** @class */ (function () {
    // searches: string = "cauliflower,cheese";
    //ingredientList = new Array();
    function CardDisplayPage(navCtrl, navParams, restProvider, theSearch) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.theSearch = theSearch;
        this.recipeList = new Array();
        this.getDataObjectsFromPromise();
    }
    CardDisplayPage.prototype.getDataObjectsFromPromise = function () {
        var _this = this;
        this.restProvider.getDataFromAPIViaPromise().then(function (data) {
            console.log("Trying to access results from the Promise return");
            _this.recipeData = data;
            console.log("Got results from the Promise");
            for (var i = 0; i < _this.recipeData.hits.length; i++) {
                _this.recipeList[i] = {
                    "name": _this.recipeData.hits[i].recipe.label,
                    "url": _this.recipeData.hits[i].recipe.url,
                    "icon": _this.recipeData.hits[i].recipe.image,
                    "source": _this.recipeData.hits[i].recipe.source,
                    "ingredients": _this.recipeData.hits[i].recipe.ingredientLines
                };
                // console.log(this.url);
            }
            ;
        });
    };
    CardDisplayPage.prototype.displayJSONdata = function (clickedObject) {
        this.selectedObject = clickedObject;
        console.log("Assigned the JSON object in the Click Event from card-display.html");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recipe_info_recipe_info__["a" /* RecipeInfoPage */], {
            ourParam: this.selectedObject
        });
    };
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
    CardDisplayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardDisplayPage');
    };
    CardDisplayPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CardDisplayPage.prototype.goToAllergies = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__allergies_allergies__["a" /* AllergiesPage */]);
    };
    CardDisplayPage.prototype.goToRecipeInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recipe_info_recipe_info__["a" /* RecipeInfoPage */]);
    };
    CardDisplayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card-display',template:/*ion-inline-start:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\pages\card-display\card-display.html"*/'s<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>CardDisplay</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n	<ion-item>\n\n		<button ion-button round outline color="danger" (click) = "goToHome()">Go To Home</button>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<button ion-button round outline color="danger" (click) = "goToAllergies()">Go To Allergies</button>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<button ion-button round outline color="danger" (click) = "goToRecipeInfo()">Go To Recipe Info</button>\n\n	</ion-item>\n\n	\n\n		<ion-card *ngFor="let result of recipeList" (click)="displayJSONdata(result)">\n\n			<img src={{result.icon}}>\n\n			<ion-card-content>\n\n				<ion-card-title>\n\n					{{result.name}}\n\n				</ion-card-title>\n\n				<p>{{result.source}}</p>\n\n		</ion-card-content>\n\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\pages\card-display\card-display.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_searchparams_searchparams__["a" /* SearchparamsProvider */]])
    ], CardDisplayPage);
    return CardDisplayPage;
}());

//# sourceMappingURL=card-display.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__allergies_allergies__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_display_card_display__ = __webpack_require__(44);
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
    RecipeInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipe-info',template:/*ion-inline-start:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\pages\recipe-info\recipe-info.html"*/'<ion-header>\n\n\n\n<ion-card>\n\n<ion-card-content>\n\n\n\n  <img src="assets/imgs/noodles.png" style="float:left;width:325px;height:325px;"/>\n\n   \n\n   \n\n       <ion-card-title>\n\n\n\n     <h1>{{passedObject.name}}</h1>\n\n      </ion-card-title>\n\n\n\n    <p>\n\n      Cook our healthy, vegan stir-fry to pack in four of your 5-a-day. The hoisin sauce is \n\n      made with Chinese five spice and apple cider vinegar to boost the flavour\n\n    </p>\n\n    \n\n    <div>\n\n   \n\n\n\n    <b>INGREDIENTS</b>\n\n  \n\n\n\n    </div>\n\n\n\n \n\n    <ion-row >\n\n    <ion-col full col-12>Nutritional Info </ion-col>\n\n   <ion-chip>\n\n  <ion-label padding-horizontal>Kcal</ion-label>\n\n  <ion-label padding-horizontal>fat</ion-label>\n\n  <ion-label padding-horizontal>saturates</ion-label>\n\n  <ion-label padding-horizontal>carbs</ion-label>\n\n  <ion-label padding-horizontal>sugars</ion-label>\n\n  <ion-label padding-horizontal>fibre</ion-label>\n\n  <ion-label padding-horizontal>protein</ion-label>\n\n  <ion-label padding-horizontal>salt</ion-label>\n\n		</ion-chip>\n\n	 </ion-row>\n\n\n\n  \n\n\n\n\n\n\n\n     <ion-fab right bottom>\n\n    <button ion-fab mini color="danger"><ion-icon name="share"></ion-icon></button>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n      <ion-fab bottom left>\n\n    <button ion-fab mini color="danger"(click) = "goToCardDisplay()" ><ion-icon name="backspace"></ion-icon></button>\n\n     </ion-fab>\n\n\n\n        <ion-fab top right>\n\n    <button ion-fab mini><ion-icon name="menu"></ion-icon></button>\n\n       <ion-fab-list side="left">\n\n      <button ion-fab><ion-icon name="exit"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="help"></ion-icon></button>\n\n       <button ion-fab (click) = "goToCardDisplay()"><ion-icon name="backspace"></ion-icon></button>\n\n       <button ion-fab (click) = "goToHome()"><ion-icon name="home"></ion-icon></button>\n\n    </ion-fab-list>\n\n      </ion-fab>\n\n\n\n   </ion-card-content>\n\n</ion-card>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<!-- (commented out this code) \n\n<ion-content padding>\n\n\n\n	<ion-item>\n\n		<button ion-button round outline color="danger" (click) = "goToHome()">Go To Home</button>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<button ion-button round outline color="danger" (click) = "goToCardDisplay()">Go To Card Display</button>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<button ion-button round outline color="danger" (click) = "goToAllergies()">Go To Allergies</button>\n\n	</ion-item>\n\n\n\n</ion-content>\n\n-->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n	 \n\n\n\n\n\n'/*ion-inline-end:"C:\Users\brona\Documents\CS385PROJECT\CheckMyRecipe\src\pages\recipe-info\recipe-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RecipeInfoPage);
    return RecipeInfoPage;
}());

//# sourceMappingURL=recipe-info.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map