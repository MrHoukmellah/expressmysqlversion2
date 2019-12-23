import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras} from  "@angular/router";
import { AuthService } from '../auth.service';
import { DatasasaveService } from 'src/app/datasasave.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router, private dataservice: DatasasaveService) {

   }
  id:any

  ngOnInit() {
  }
   login(form){
    return this.authService.login(form.value).subscribe((res)=>{

      this.id=res.user.id
      console.log(this.id)
      let navigationExtras: NavigationExtras = {
        state: {
          id : this.id
        } 
      }
      console.log(navigationExtras)
      this.router.navigate(['home'], navigationExtras)
      this.dataservice.setData(this.id)

      console.log(this.id)
      
    }
    )
   

  }
  }
  


