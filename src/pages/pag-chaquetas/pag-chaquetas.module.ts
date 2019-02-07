import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagChaquetasPage } from './pag-chaquetas';

import { PagChaq1Page } from './pag-chaq1/pag-chaq1';

@NgModule({
  declarations: [
    PagChaquetasPage,
    PagChaq1Page
  ],
  imports: [
    IonicPageModule.forChild(PagChaquetasPage),
  ],
})
export class PagChaquetasPageModule {}
