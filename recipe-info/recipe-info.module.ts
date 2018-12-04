import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeInfoPage } from './recipe-info';

@NgModule({
  declarations: [
    RecipeInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeInfoPage),
  ],
})
export class RecipeInfoPageModule {}
