import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vista-docente',
  standalone: true,
  imports:[IonicModule],
  templateUrl: './vista-docente.page.html',
  styleUrls: ['./vista-docente.page.scss'],
})
export class VistaDocentePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
