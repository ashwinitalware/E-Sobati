import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddprescriptionPageRoutingModule } from './addprescription-routing.module';

import { AddprescriptionPage } from './addprescription.page';
import { FooterPage } from '../footer/footer.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddprescriptionPageRoutingModule,
    FooterPageModule
  ],
  declarations: [AddprescriptionPage],
  exports:[FooterPage]
})
export class AddprescriptionPageModule {}
