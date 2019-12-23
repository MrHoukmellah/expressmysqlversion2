import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { APIService } from '../apiservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

data:any
products:any
scrollId: string;

  constructor(public route : ActivatedRoute, public router:Router, public APIService:APIService) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.phrase;
      }
      console.log(this.data)
    });

   }

  ngOnInit() {
    this.posts(this.data)
  }

  posts(phrase) {
    this.APIService.postbysearch({ "q": phrase }).subscribe(products => {
     console.log(products)
     this.products = products.products;
     this.scrollId = products.scrollId;
     
   })
  }
  go(data: any) {
    console.log(data)
    // this.dataservice.setData("product", data)
    // this.Router.navigateByUrl('products/' + data.id);
  
    console.log({
      id: data._id,
      product: data._source
    })
  
    data._source['id'] = data._id
    let navigationExtras: NavigationExtras = {
      state: {
        product: data._source
      }
    };
    console.log('lajeznfjz',navigationExtras)
  
    this.router.navigate(['products/' + data._source['id']], navigationExtras)
   }

   getMoreProducts() {
		this.APIService.infinitScroll(this.scrollId).subscribe(products => {
      console.log('heeere');
			this.products = this.products.concat(products.products);
			this.scrollId = products.scrollId;
		})
	}

}
