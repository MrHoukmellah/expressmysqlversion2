import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasasaveService {
id : any;
Product_id : any;
  constructor() { }

  setData(id : any )
  {

    this.id = id;
    console.log(this.id)

  }
  getData()
  {
    console.log(this.id)
    return this.id;
  }
  setProductId(product_id){
    this.Product_id = product_id
  }
  getProductId()
  {
    
    return this.Product_id;
  }
}
