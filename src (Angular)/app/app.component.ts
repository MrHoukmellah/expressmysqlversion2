import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }

 
  ];
  loggedIn: boolean;
  admin:boolean
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public auth:AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.auth.isLoggedIn().subscribe((state) => { 
        this.loggedIn = state,
        console.log(this.loggedIn)
      });
      this.auth.IsAdmin().subscribe((state) => 
      this.admin = state)
    });

  
  }


IsLogged(){
  this.auth.isLoggedIn().subscribe((state) => {
    if(state) {
      console.log('Logged IN');
    } else {
      console.log('Logged OUT');
    }
  });
}
logout() {
  this.auth.logout()
}
}
