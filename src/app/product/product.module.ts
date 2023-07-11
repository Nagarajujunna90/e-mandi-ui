import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllProductComponent } from './all-product/all-product.component';
import { ProfileeditorComponent } from './profileeditor/profileeditor.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { DownloadImageComponent } from './download-image/download-image.component';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [
    HomeComponent,
    CreateProductComponent,
    UpdateProductComponent,
    AllProductComponent,
    ProfileeditorComponent,
    FileuploadComponent,
    DownloadImageComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule, 
    FormsModule,
    ReactiveFormsModule  ]
})
export class ProductModule { }
