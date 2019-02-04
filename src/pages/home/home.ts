import { Component} from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { PagChaquetasPage } from '../pag-chaquetas/pag-chaquetas';
import { PagJerseyPage } from '../pag-jersey/pag-jersey';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    menu.enable(true);
  }
  pagChaq(){
    this.navCtrl.push(PagChaquetasPage);
  }
  pagJer(){
    this.navCtrl.push(PagJerseyPage);
  }

}


