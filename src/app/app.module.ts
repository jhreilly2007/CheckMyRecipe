import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AllergiesPage } from '../pages/allergies/allergies';
import { CardDisplayPage } from '../pages/card-display/card-display';
import { RecipeInfoPage } from '../pages/recipe-info/recipe-info';
import { RestProvider } from '../providers/rest/rest';
import { SearchparamsProvider } from '../providers/searchparams/searchparams';

@NgModule({
  declarations: [
    MyApp,
    HomePage, AllergiesPage,
    CardDisplayPage, RecipeInfoPage
  ],
  imports: [
    BrowserModule, HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, AllergiesPage,
    CardDisplayPage, RecipeInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    SearchparamsProvider
  ]
})
export class AppModule {}
