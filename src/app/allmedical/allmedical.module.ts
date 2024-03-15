import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllmedicalPageRoutingModule } from './allmedical-routing.module';

import { AllmedicalPage } from './allmedical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllmedicalPageRoutingModule
  ],
  declarations: [AllmedicalPage]
})
export class AllmedicalPageModule {}
