import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , NavigationExtras } from '@angular/router';
import { APIService } from '../apiservice.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.page.html',
  styleUrls: ['./product-categories.page.scss'],
})

export class ProductCategoriesPage implements OnInit {

  data:any
  products:any
  scrollId: string;

  constructor(public route: ActivatedRoute, public router: Router, public APIService :APIService, public auth:AuthService) { 

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.category;
      }
      this.posts3(this.data)

      
      console.log(this.data)
    });

  }
  

  

  ngOnInit() {
  }

  /*posts(category) {
    console.log('heere', category);
    this.APIService.postbycateg1({ "category": category }).subscribe(products => {
     console.log('category debug', products)
     this.products = products.products;
     this.scrollId = products.scrollId;
   })
  
  }*/

/* posts1(table) {
table="users"
  this.http.postbycateg1({ "category": category }).subscribe(products => {
   console.log('category debug', products)
   this.products = products.products;
   this.scrollId = products.scrollId;
 })

 }*/
 go(data: any) {
  console.log(data)
  // this.dataservice.setData("product", data)
  // this.Router.navigateByUrl('products/' + data.id);

  console.log({
    
    product: data
  })

  data = data
  let navigationExtras: NavigationExtras = {
    state: {
      product: data,
    }
  };
  console.log('lajeznfjz',navigationExtras)

  this.router.navigate(['products/' + data.id], navigationExtras)
 }

 /*getMoreProducts() {
  this.APIService.infinitScroll(this.scrollId).subscribe(products => {
    this.products = this.products.concat(products.products);
    this.scrollId = products.scrollId;
  })*/
  posts3(data){
    this.auth.getprods1(0,data).subscribe(res =>{
      this.products = res
      //console.log(this.products[0].image)
      for(let i in this.products)
      {this.products[i].image.split(',https')}
      //console.log(this.products[3].image)
  })}

  posts3InfinitScroll(data){
    var offset = this.products.length ;
    this.auth.getprods1(offset,data).subscribe(res =>{
      this.products = this.products.concat(res);
      console.log(res)
  })}
}


