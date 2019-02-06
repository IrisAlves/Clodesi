import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { PagChaq1Page } from './pag-chaqueta1/pag-chaq1';
import { PagChaq2Page } from './pag-chaqueta2/pag-chaq2';

@IonicPage()
@Component({
  selector: 'page-pag-chaquetas',
  templateUrl: 'pag-chaquetas.html',
})
export class PagChaquetasPage {

  activeMenu: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagChaquetasPage');
  }
  
  abrirchaq1(){
    this.navCtrl.push(PagChaq1Page);

  }
  abrirchaq2(){
    this.navCtrl.push(PagChaq2Page);

  }
  atras(){
    this.navCtrl.pop();

  }

}
