import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-qr-profesor',
  standalone: true,
  templateUrl: './qr-profesor.page.html',
  styleUrls: ['./qr-profesor.page.scss'],
  imports: [IonicModule],
})
export class QrProfesorPage implements OnInit {
  clase: string = '';
  id: string = '';
  horario: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.clase = navigation?.extras.state?.['nombre'] || '';
    this.id = navigation?.extras.state?.['id'] || '';
    this.horario = navigation?.extras.state?.['horario'] || '';
  }

  ngOnInit() {}
}
