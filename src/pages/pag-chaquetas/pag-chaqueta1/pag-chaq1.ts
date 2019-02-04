import { Fav } from './../../../models/Fav-item/Fav-item.inteface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pag-chaq1',
  templateUrl: 'pag-chaq1.html',
})
export class PagChaq1Page {

  images=['1.jpg','2.jpg','3.jpg'];
  list:Array<{nombre: string, img: string}>;
  lista:Fav;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagChaq1Page');
  }

  anadirfav(nomb:string,img:string){

    this.lista = {
      nombre : nomb,
      imagen : img
    };
   // this.lista.
  }

}