import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'vista-alumno',
    loadChildren: () => import('./vista-alumno/vista-alumno.module').then( m => m.VistaAlumnoPageModule)
  },
  {
    path: 'vista-docente',
    loadChildren: () => import('./vista-docente/vista-docente.module').then( m => m.VistaDocentePageModule)
  },
  {
    path: 'clases-profesor',
    loadChildren: () => import('./clases-profesor/clases-profesor.module').then( m => m.ClasesProfesorPageModule)
  },
  {
    path: 'clases-alumno',
    loadChildren: () => import('./clases-alumno/clases-alumno.module').then( m => m.ClasesAlumnoPageModule)
  },
  {
    path: 'qr-profesor',
    loadChildren: () => import('./qr-profesor/qr-profesor.module').then( m => m.QrProfesorPageModule)
  },
  {
    path: 'qr-alumno',
    loadChildren: () => import('./qr-alumno/qr-alumno.module').then( m => m.QrAlumnoPageModule)
  },
  {
    path: 'newpass',
    loadChildren: () => import('./newpass/newpass.module').then( m => m.NewpassPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
