import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllhospitalPageRoutingModule } from './allhospital-routing.module';

import { AllhospitalPage } from './allhospital.page';
import { FooterPageModule } from '../footer/footer.module';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllhospitalPageRoutingModule,
    FooterPageModule
  ],
  declarations: [AllhospitalPage],
  exports:[FooterPage]
})
export class AllhospitalPageModule {}
