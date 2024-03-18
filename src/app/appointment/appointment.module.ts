import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentPageRoutingModule } from './appointment-routing.module';

import { AppointmentPage } from './appointment.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterPageModule } from '../footer/footer.module';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentPageRoutingModule,
    FooterPageModule
  ],
  declarations: [AppointmentPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[FooterPage]
})
export class AppointmentPageModule {}
