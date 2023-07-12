import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCartsComponent } from './all-carts/all-carts.component';
import { AddCartComponent } from './add-cart/add-cart.component';

const routes: Routes = [
  { path: 'add-cart', component: AddCartComponent },
  { path: 'get-carts', component: AllCartsComponent },
  { path: '',redirectTo: 'cart',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { 
  constructor(){
    console.log('routi')
  }
}
