import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllprescriptionPageRoutingModule } from './allprescription-routing.module';

import { AllprescriptionPage } from './allprescription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllprescriptionPageRoutingModule
  ],
  declarations: [AllprescriptionPage]
})
export class AllprescriptionPageModule {}
