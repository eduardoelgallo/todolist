import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenPageRoutingModule } from './open-routing.module';

import { OpenPage } from './open.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenPageRoutingModule,
    SharedModule
  ],
  declarations: [OpenPage]
})
export class OpenPageModule {}
