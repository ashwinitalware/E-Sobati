import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookambulancePageRoutingModule } from './bookambulance-routing.module';

import { BookambulancePage } from './bookambulance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookambulancePageRoutingModule
  ],
  declarations: [BookambulancePage]
})
export class BookambulancePageModule {}
