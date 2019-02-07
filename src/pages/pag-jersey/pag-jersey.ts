import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PagJersey1Page } from './pag-jersey1/pag-jersey1';
import { PagJersey2Page } from './pag-jersey2/pag-jersey2';
import { PagJersey3Page } from './pag-jersey3/pag-jersey3';
import { PagJersey4Page } from './pag-jersey4/pag-jersey4';



@IonicPage()
@Component({
  selector: 'page-pag-jersey',
  templateUrl: 'pag-jersey.html',
})
export class PagJerseyPage {
  activeMenu: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagJerseyPage');
  }
  abrir1(){
    this.navCtrl.push(PagJersey1Page);
  }
  abrir2(){
    this.navCtrl.push(PagJersey2Page);
  }
  abrir3(){
    this.navCtrl.push(PagJersey3Page);
  }
  abrir4(){
    this.navCtrl.push(PagJersey4Page);
  }
  atras(){
    this.navCtrl.pop();
  }

}
