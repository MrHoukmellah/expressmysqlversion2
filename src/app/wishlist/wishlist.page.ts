import { Component, OnInit } from '@angular/core';
import { DatasasaveService } from '../datasasave.service';
import { APIService } from '../apiservice.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthService } from '../auth/auth.service';
import { post } from 'selenium-webdriver/http';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  constructor(public auth:AuthService, public Router : Router,public dataservice: DatasasaveService, private storage:Storage, public APIService :APIService,public route: ActivatedRoute, public routes:Router) { 
    this.id=this.dataservice.getData()
    this.product_id=this.dataservice.getProductId()
    console.log(this.id);
    console.log(this.product_id)
    
  }

  id:any;
  product_id:any
  products:any
  ids:any

  ngOnInit() {
    this.id = this.posts();
    console.log(this.id)
  }


  async posts() {
    return await this.storage.get("UserId").then(res => {
    this.id=res 
    this.post(res)}

    

    )
  }
  post(userId){
    
        this.auth.postwishlist(userId).subscribe(products => {
          console.log(products)
          this.products = products

      }
    )
  }
  go(data: any) {
		console.log(data)
		// this.dataservice.setData("product", data)
		// this.Router.navigateByUrl('products/' + data.id);

		console.log({
			product: data
		})

		let navigationExtras: NavigationExtras = {
			state: {
				product: data,
			}
		};
		console.log('lajeznfjz',navigationExtras)

		this.Router.navigate(['products/' + data.id], navigationExtras)
  }
  
  


    
	/*	this.APIService.postwishlist({ "id" : "" }).subscribe(products => {
			console.log(products)
			this.products = products
		}) */


}
