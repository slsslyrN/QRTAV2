import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vista-alumno',
  standalone: true,
  imports:[IonicModule],
  templateUrl: './vista-alumno.page.html',
  styleUrls: ['./vista-alumno.page.scss'],
})
export class VistaAlumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
