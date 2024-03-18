import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlljobsPageRoutingModule } from './alljobs-routing.module';

import { AlljobsPage } from './alljobs.page';
import { FooterPageModule } from '../footer/footer.module';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlljobsPageRoutingModule,
    FooterPageModule
  ],
  declarations: [AlljobsPage],
  exports:[FooterPage]
})
export class AlljobsPageModule {}
