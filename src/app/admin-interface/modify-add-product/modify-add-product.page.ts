import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-modify-add-product',
  templateUrl: './modify-add-product.page.html',
  styleUrls: ['./modify-add-product.page.scss'],
})
export class ModifyAddProductPage implements OnInit {

  constructor(public router : Router,public route:ActivatedRoute, public auth:AuthService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.products = this.router.getCurrentNavigation().extras.state.data;
        this.action = this.router.getCurrentNavigation().extras.state.action;
        this.titre = this.products.title;
        this.name = this.products.category_id
        this.description = this.products.description
        this.price= this.products.price;
        this.image = this.products.image;
        this.url = this.products.url;
        this.id= this.products.id

        this.action = this.router.getCurrentNavigation().extras.state.action;
        if(this.action = "Modifier"){
          this.add=false
        }

   }
  })}
  url:any
  titre:any
   name: any 
   description:any 
   price:any
   image:any
    add:any
   products : any;
   id : any;
    action="Ajouter"


  ngOnInit() {
    
  }
  valid(){
    console.log(this.titre,this.name,this.description,this.price, this.image)
    this.updatingProduct()
  }

  updatingProduct() {
    this.auth.updateproduct(this.id,this.titre,this.description, this.name,this.image,this.url,this.price).subscribe(res =>res)
    this.auth.addProduct(this.titre,this.description, this.name,this.image,this.url,this.price).subscribe(res =>res)
    this.router.navigate(['admin-interface'])

  }
  
}

  

