import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModifyAddUserPage } from './modify-add-user.page';
import { ComponentModule } from 'src/app/component/component.module';

const routes: Routes = [
  {
    path: '',
    component: ModifyAddUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentModule
  ],
  declarations: [ModifyAddUserPage]
})
export class ModifyAddUserPageModule {}
