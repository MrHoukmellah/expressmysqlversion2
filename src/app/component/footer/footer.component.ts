import { Component, OnInit } from '@angular/core';
import { AuthService } from '/home/houkmellah/Project/Comparateur/src/app/auth/auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DatasasaveService } from 'src/app/datasasave.service';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public auth: AuthService,public platform: Platform, public Router: Router,public storage:Storage, public dataserve:DatasasaveService) { }
  loggedIn: boolean;
  admin:boolean;

  ngOnInit() {
    this.auth.isLoggedIn().subscribe((state) => { 
			this.loggedIn = state
      console.log(this.loggedIn)})
    this.auth.IsAdmin().subscribe((state) => {
      this.admin=state
      console.log(this.admin)
    })
    
    }


 
  
  logout() {
		this.auth.logout()
  }
  goLogin(url) {
		this.Router.navigate([url])
  }



}
