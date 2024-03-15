import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllambulancePageRoutingModule } from './allambulance-routing.module';

import { AllambulancePage } from './allambulance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllambulancePageRoutingModule
  ],
  declarations: [AllambulancePage]
})
export class AllambulancePageModule {}
