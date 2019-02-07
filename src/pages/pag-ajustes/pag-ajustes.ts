import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ListaFavProvider } from '../../providers/lista-fav/lista-fav';



@IonicPage()
@Component({
  selector: 'page-pag-ajustes',
  templateUrl: 'pag-ajustes.html',
})
export class PagAjustesPage {
  

  constructor(public LFavPro: ListaFavProvider, public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) 
  {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagAjustesPage');
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Telefono',
      subTitle: '988000000',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert2() {
    let alert = this.alertCtrl.create({
      title: 'Movil',
      subTitle: '666000111',
      buttons: ['OK']
    });
    alert.present();
  }
}
