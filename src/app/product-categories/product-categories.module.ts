import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductCategoriesPage } from './product-categories.page';
import { ComponentModule } from '../component/component.module';

const routes: Routes = [
  {
    path: '',
    component: ProductCategoriesPage
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
  declarations: [ProductCategoriesPage]
})
export class ProductCategoriesPageModule {}
