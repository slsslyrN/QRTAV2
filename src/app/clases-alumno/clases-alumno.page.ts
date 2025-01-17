import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-clases-alumno',
  standalone: true,
  imports:[IonicModule],
  templateUrl: './clases-alumno.page.html',
  styleUrls: ['./clases-alumno.page.scss'],
})
export class ClasesAlumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
