import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { PagChaq1Page } from './pag-chaq1/pag-chaq1';
import { PagChaq2Page } from './pag-chaq2/pag-chaq2';
import { PagChaq4Page } from './pag-chaq4/pag-chaq4';
import { PagChaq3Page } from './pag-chaq3/pag-chaq3';

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

  abrirchaq3(){
    this.navCtrl.push(PagChaq3Page);

  }

  abrirchaq4(){
    this.navCtrl.push(PagChaq4Page);

  }
  atras(){
    this.navCtrl.pop();

  }

}
