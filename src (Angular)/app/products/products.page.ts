import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../apiservice.service';
import { Router, Routes, NavigationExtras } from '@angular/router';
import { DatasasaveService } from '../datasasave.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products:any;



  constructor(public route: ActivatedRoute,public APIService: APIService,public Router: Router, public dataserve: DatasasaveService) { }
  
  ngOnInit() {}

post(categoryId) {

    let navigationExtras: NavigationExtras = {
			state: {
				category : categoryId
      }

      
    }
    console.log(navigationExtras)
    this.Router.navigate(['product/categories'], navigationExtras)

  }
    
  
  


}
