import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpatientPageRoutingModule } from './addpatient-routing.module';

import { AddpatientPage } from './addpatient.page';
import { FooterPage } from '../footer/footer.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpatientPageRoutingModule,
    FooterPageModule
  ],
  declarations: [AddpatientPage],
  exports: [FooterPage]
})
export class AddpatientPageModule {}
