import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllProductComponent } from './all-product/all-product.component';

@NgModule({
  declarations: [
    CreateProductComponent,
    UpdateProductComponent,
    AllProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule, 
    FormsModule,
    ReactiveFormsModule  ]
})
export class ProductModule { }
