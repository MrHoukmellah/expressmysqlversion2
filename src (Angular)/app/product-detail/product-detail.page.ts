import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute , ActivatedRouteSnapshot} from '@angular/router';
import { DatasasaveService} from '../datasasave.service';
import { NavController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { APIService } from '../apiservice.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { Storage } from '@ionic/storage';





@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  public product = Object;
  public specifiedprod;
  public table = [];
  myId : any;
  public isFavorite = false

  constructor(public APIService:APIService, private storage: Storage, public auth : AuthService,  public router : Router, public Navctrl : NavController, public dataserve:DatasasaveService, public route : ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.product = this.router.getCurrentNavigation().extras.state.product;
        console.log(this.product)

    }})

    

  }

  ngOnInit() {



    /*this.myId = this.Route.snapshot.paramMap.get('id');
    console.log('================')
    console.log(this.dataserve.getData("product"))

    this.product[this.myId]=  this.dataserve.getData("product")
    this.specifiedprod=(this.product[this.myId])
    this.table = Array.from(this.specifiedprod)
    console.log(Array.isArray(this.specifiedprod));


    
    console.log(this.myId)
    console.log(this.specifiedprod)
    console.log()*/


/*(this.Route.snapshot.data['Solver'])
    {
      this.product = (this.Route.snapshot.data['Solver'])
      
      console.log('products',this.product)
    }*/
  }
  goto(url)
  {
    this.router.navigateByUrl(url);
  }


  wishlist(productid)  {
      this.storage.get('UserId').then(  ids => {
        console.log(ids)
      this.auth.insertwishlist(ids,productid).subscribe(res =>res)
    })
    
    // this.http.post(endpoint, {"userId":user_id,"productId":id}).pipe(catchError(this.handleError<any>('post request')));

    // this.APIService.postwishlist({"userId":user_id,"productId":id})
  }



}
 