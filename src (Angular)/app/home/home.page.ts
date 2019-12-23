import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { APIService } from '../apiservice.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DatasasaveService } from '../datasasave.service';
import { AuthService } from '../auth/auth.service'
import { map } from 'rxjs/operators';


import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { timeout } from 'q';
/** import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/platform-browser/animations';*/


@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],

})
export class HomePage {

	products: any;
	productsByCategory: any[];
	clicks: boolean;
	id:any;
	scrollId: string;
	public form = [
		{ val: 'Smartphones', isChecked: true },
		{ val: 'Tablettes', isChecked: false },
		{ val: 'Accessoires Téléphones', isChecked: false },
		{ val: 'Accessoires Tablettes', isChecked: false },
		{ val: 'Ordinateurs Fixes', isChecked: false },
		{ val: 'Ordinateurs Portables', isChecked: false },
	];
	loggedIn: boolean;
	constructor(public route:ActivatedRoute,  public auth: AuthService, public APIService: APIService, public Navctrl: NavController, public Router: Router, public dataservice: DatasasaveService) {
		this.clicks = false;
		this.route.queryParams.subscribe(params => {
			if (this.Router.getCurrentNavigation().extras.state) {
			  this.id = this.Router.getCurrentNavigation().extras.state.id;
			  console.log(this.id)
	  
			}
		  });
	}

	ngOnInit() {
		this.posts3()

		this.auth.isLoggedIn().subscribe((state) => { 
			this.loggedIn = state
			console.log(this.loggedIn)
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

	/*getPosts() {
		console.log('Getting posts')
		this.APIService.getProducts(20, 0).subscribe(products => {
			console.log("products =>", products)
			this.products = products.products;
			this.scrollId = products.scrollId;

		})
	}*/
	Showsearchbar() {
		if (this.clicks) {
		this.clicks = false;
			console.log(this.clicks)
		}
		else { this.clicks = true; }
		console.log(this.clicks)

		return this.clicks
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
	/*posts() {
		this.APIService.postsByCategory({ "q": "1", "category": "telephones-smartphones" }).subscribe(products => {
			console.log(products)
			this.productsByCategory = products
		})
	}*/
	goLogin() {
		this.Router.navigate(['login'])
	}
	/*getMoreProducts() {
		this.APIService.infinitScroll(this.scrollId).subscribe(products => {
			this.products = this.products.concat(products.products);
			this.scrollId = products.scrollId;
		})
	}*/

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
}
