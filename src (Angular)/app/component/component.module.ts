import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AuthModule } from '../auth/auth.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({

  declarations: [HeaderComponent,FooterComponent],
  exports: [
      HeaderComponent,
      FooterComponent
  ],
  imports: [
    //BrowserAnimationsModule,
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule
    

  ]
  
  
})
export class ComponentModule {}