import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-qr-alumno',
  standalone: true,
  imports:[IonicModule],
  templateUrl: './qr-alumno.page.html',
  styleUrls: ['./qr-alumno.page.scss'],
})
export class QrAlumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
