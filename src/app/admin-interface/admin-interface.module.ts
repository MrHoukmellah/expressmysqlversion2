import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminInterfacePage } from './admin-interface.page';
import { ComponentModule } from 'src/app/component/component.module';

const routes: Routes = [
  {
    path: '',
    component: AdminInterfacePage
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
  declarations: [AdminInterfacePage]
})
export class AdminInterfacePageModule {}
