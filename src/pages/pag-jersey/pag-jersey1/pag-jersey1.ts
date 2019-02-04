import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pag-jer1',
  templateUrl: 'pag-jersey1.html',
})
export class PagJersey1Page {

  images=['1.jpg','2.jpg','3.jpg'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagJersey1Page');
  }
  

}