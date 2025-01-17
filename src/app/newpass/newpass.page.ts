import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-newpass',
  standalone: true,
  imports:[IonicModule],
  templateUrl: './newpass.page.html',
  styleUrls: ['./newpass.page.scss'],
})
export class NewpassPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
