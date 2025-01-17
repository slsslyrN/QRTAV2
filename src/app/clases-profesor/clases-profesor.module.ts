import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasesProfesorPageRoutingModule } from './clases-profesor-routing.module';

import { ClasesProfesorPage } from './clases-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesProfesorPageRoutingModule
  ],
  declarations: []
})
export class ClasesProfesorPageModule {}
