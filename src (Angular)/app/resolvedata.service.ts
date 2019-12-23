/*import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot ,  Resolve } from '@angular/router';
import { DatasasaveService } from './datasasave.service';


@Injectable({
  providedIn: 'root'
})
export class ResolvedataService implements Resolve<any>{
  public product = [];

  constructor(public dataservice: DatasasaveService) { }

  resolve(route: ActivatedRouteSnapshot){
    var id = route.paramMap.get('id');

    this.product[id] = this.dataservice.getData(id);
    console.log(this.dataservice.getData(id))
    console.log('produits', this.product[id].title)
    
  }


}*/
