import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { ResolvedataService } from './resolvedata.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { 
    path: 'products',
    loadChildren: './products/products.module#ProductsPageModule' 
  },
  { 
    path: 'products/:id',
    //resolve: {Solver: ResolvedataService},
    loadChildren: './product-detail/product-detail.module#ProductDetailPageModule' 
  },
  { 
    path: 'product/categories', 
    loadChildren: './product-categories/product-categories.module#ProductCategoriesPageModule' 
  },
  { 
    path: 'about', 
    loadChildren: './about/about.module#AboutPageModule' 
  },
  { 
    path: 'support', 
    loadChildren: './support/support.module#SupportPageModule' 
  },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistPageModule' },
  { path: 'admin-interface', loadChildren: './admin-interface/admin-interface.module#AdminInterfacePageModule' },
  { path: 'modify-add-product', loadChildren: './admin-interface/modify-add-product/modify-add-product.module#ModifyAddProductPageModule' },
  { path: 'modify-add-user', loadChildren: './admin-interface/modify-add-user/modify-add-user.module#ModifyAddUserPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
