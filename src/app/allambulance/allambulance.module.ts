import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllambulancePageRoutingModule } from './allambulance-routing.module';

import { AllambulancePage } from './allambulance.page';
import { FooterPageModule } from '../footer/footer.module';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllambulancePageRoutingModule,
    FooterPageModule
  ],
  declarations: [AllambulancePage],
  exports:[FooterPage]
})
export class AllambulancePageModule {}
