import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { AuthService } from '../auth/auth.service';
import { tap , map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.page.html',
  styleUrls: ['./admin-interface.page.scss'],
})
export class AdminInterfacePage implements OnInit {

  constructor(public Router:Router, public auth: AuthService, public httpClient:HttpClient) { 

  }
  products : any
  user : any

  ngOnInit() {
    this.posts2()
    this.posts3()

  }

  modify(data,way){

        
  

    let navigationExtras: NavigationExtras = {
      state: {
        data: data,
        action: "Modifier"
      }
    }
    console.log('go ====>',navigationExtras)

    this.Router.navigate(['modify-add-'+way], navigationExtras)
  
}
  go(way){
    console.log(way)
    this.Router.navigate(['modify-add-'+way])
  }



  posts2(){
    this.auth.posts().subscribe(res=>{
      this.user = res
      console.log(res)
  })}
  posts3(){
    this.auth.getprods(0).subscribe(res =>{
      this.products = res
      console.log(this.products[0].image)
      for(let i in this.products)
      {this.products[i].image.split(',https')}
      console.log(this.products[3].image)
  })}

  posts3InfinitScroll(){
    var offset = this.products.length ;
    this.auth.getprods(offset).subscribe(res =>{
      this.products = this.products.concat(res);
      console.log(res)
  })}
  deleteUser(id){
    this.auth.deletingUser(id).subscribe(res =>res)
  }
  deleteProduct(id){
    this.auth.deletingProduct(id).subscribe(res => res)
  }
}