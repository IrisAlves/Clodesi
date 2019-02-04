import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagFavoritosPage } from './pag-favoritos';

@NgModule({
  declarations: [
    PagFavoritosPage,
  ],
  imports: [
    IonicPageModule.forChild(PagFavoritosPage),
  ],
})
export class PagFavoritosPageModule {}
