import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardDisplayPage } from './card-display';

@NgModule({
  declarations: [
    CardDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(CardDisplayPage),
  ],
})
export class CardDisplayPageModule {}
