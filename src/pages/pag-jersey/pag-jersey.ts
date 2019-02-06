import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PagJersey1Page } from './pag-jersey1/pag-jersey1';
import { PagJersey2Page } from './pag-jersey2/pag-jersey2';



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
  atras(){
    this.navCtrl.pop();
  }

}
