import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    IonicModule,
    RouterModule // Agrega RouterModule para habilitar routerLink y routerLinkActive
  ],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}