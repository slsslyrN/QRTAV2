import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-clases-profesor',
  standalone: true,
    imports:[IonicModule],
  templateUrl: './clases-profesor.page.html',
  styleUrls: ['./clases-profesor.page.scss'],
})
export class ClasesProfesorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
