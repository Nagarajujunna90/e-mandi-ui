import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { AddCartComponent } from './add-cart/add-cart.component';
import { DeleteCartComponent } from './delete-cart/delete-cart.component';
import { AllCartsComponent } from './all-carts/all-carts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCartComponent,
    AllCartsComponent,
    DeleteCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CartModule {
  constructor(){
    console.log('hello')
  }
 }
