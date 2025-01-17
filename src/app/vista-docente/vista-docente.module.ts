import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaDocentePageRoutingModule } from './vista-docente-routing.module';

import { VistaDocentePage } from './vista-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaDocentePageRoutingModule
  ],
  declarations: []
})
export class VistaDocentePageModule {}
