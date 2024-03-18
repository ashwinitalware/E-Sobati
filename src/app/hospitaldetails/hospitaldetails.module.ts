import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitaldetailsPageRoutingModule } from './hospitaldetails-routing.module';

import { HospitaldetailsPage } from './hospitaldetails.page';
import { FooterPageModule } from '../footer/footer.module';
import { FooterPage } from '../footer/footer.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitaldetailsPageRoutingModule,
    FooterPageModule
  ],
  declarations: [HospitaldetailsPage],
  exports:[FooterPage],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HospitaldetailsPageModule {}
