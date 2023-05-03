import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllProductComponent } from './all-product/all-product.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    AllProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
