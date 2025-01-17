import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaDocentePage } from './vista-docente.page';

const routes: Routes = [
  {
    path: '',
    component: VistaDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaDocentePageRoutingModule {}
