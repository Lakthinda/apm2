import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductDetailGuard } from './product-detail/product-detail.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent},
       {path: 'products', component: ProductListComponent},
    ])
  ],
  exports: [ RouterModule ]
})
export class ProductRoutingModule { }
