import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmenthistoryPageRoutingModule } from './appointmenthistory-routing.module';

import { AppointmenthistoryPage } from './appointmenthistory.page';
import { FooterPage } from '../footer/footer.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmenthistoryPageRoutingModule,
    FooterPageModule
  ],
  declarations: [AppointmenthistoryPage],
  exports:[FooterPage]

})
export class AppointmenthistoryPageModule {}
