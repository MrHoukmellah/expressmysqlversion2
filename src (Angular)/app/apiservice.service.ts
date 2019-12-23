import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class APIService {

  http: any;
  host : String;

  constructor(http: HttpClient) {
    this.http = http;
    this.host = "http://localhost:3000";
  }

  getProducts(limit = 20, offset = 0, category = '') {
    let endpoint = this.host + '/products?limit=' + limit + '&offset=' + offset
    return this.http.get(endpoint).pipe(map(res => res))
  }
  postsByCategory(dataparams) {
    let endpoint = this.host + '/category'
    return this.http.post(endpoint,dataparams).pipe(map(res => res))
  }
  postbycateg1(dataparams){
    let endpoint = this.host+'/rating'
    return this.http.post(endpoint,dataparams).pipe(map(res => res))
  }
  postbysearch(dataparams){
    let endpoint = this.host+'/products'
    return this.http.post(endpoint,dataparams).pipe(map(res => res))
  }
  postwishlist(dataparams){
    let endpoint = this.host+'/data';
    console.log("dataparams =>", dataparams)
    return this.http.post(endpoint,dataparams).pipe(map(res => res))
  }
  infinitScroll(scrollId){
    let endpoint = this.host+'/products/infiniteScrollSearch';
    return this.http.post(endpoint,{"scrollId": scrollId}).pipe(map(res => res))
  }
}
