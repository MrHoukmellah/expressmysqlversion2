import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-modify-add-user',
  templateUrl: './modify-add-user.page.html',
  styleUrls: ['./modify-add-user.page.scss'],
})
export class ModifyAddUserPage implements OnInit {
  email = ''
  password = ''
  name = ''
  action="Ajouter"
  id="";
  user: any
  add=true;
  constructor(public Router:Router, public route:ActivatedRoute, public auth : AuthService) { 
    this.route.queryParams.subscribe(params => {
      if (this.Router.getCurrentNavigation().extras.state) {
        console.log('data =>', this.Router.getCurrentNavigation().extras.state.data);
        this.user = this.Router.getCurrentNavigation().extras.state.data;
        this.name = this.user.name;
        this.email = this.user.email;
        this.password = this.user.password;
        this.id= this.user.id;
        this.action = this.Router.getCurrentNavigation().extras.state.action;
        if(this.action = "Modifier"){
          this.add=false
        }



  }})


}

  ngOnInit() {

  }

  updatingUser() {
  
      this.auth.updateUser(this.id, this.name, this.email, this.password).subscribe(res =>res)
      this.Router.navigate(['admin-interface'])
    }
  addUser(){
    this.auth.addingUser(this.id, this.name, this.email, this.password).subscribe(res =>res)
    this.Router.navigate(['admin-interface'])
  }
  
  



}
