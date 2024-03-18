import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllmedicalPageRoutingModule } from './allmedical-routing.module';

import { AllmedicalPage } from './allmedical.page';
import { FooterPageModule } from '../footer/footer.module';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllmedicalPageRoutingModule,
    FooterPageModule
  ],
  declarations: [AllmedicalPage],
  exports:[FooterPage]
})
export class AllmedicalPageModule {}
