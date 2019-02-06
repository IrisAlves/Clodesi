import { ListaFavProvider } from './../../../providers/lista-fav/lista-fav';
import { Fav } from './../../../models/Fav-item/Fav-item.inteface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-pag-jer1',
  templateUrl: 'pag-jersey1.html',
})
export class PagJersey1Page {

  images=['1.jpg','2.jpg','3.jpg'];
  constructor(public navCtrl: NavController, public navParams: NavParams,public LFavPro: ListaFavProvider,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagJersey1Page');
  }
  

}