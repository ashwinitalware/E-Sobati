import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperationenquiryPageRoutingModule } from './operationenquiry-routing.module';

import { OperationenquiryPage } from './operationenquiry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperationenquiryPageRoutingModule
  ],
  declarations: [OperationenquiryPage]
})
export class OperationenquiryPageModule {}
