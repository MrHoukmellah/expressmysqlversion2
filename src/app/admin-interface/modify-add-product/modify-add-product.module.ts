import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { ModifyAddProductPage } from './modify-add-product.page';
import { ComponentModule } from 'src/app/component/component.module';

const routes: Routes = [
  {
    path: '',
    component: ModifyAddProductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModifyAddProductPage]
})
export class ModifyAddProductPageModule {}
