import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './all-product/all-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { HomeComponent } from './home/home.component';
import { ProfileeditorComponent } from './profileeditor/profileeditor.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: 'get-products', component: AllProductComponent },
  { path: 'add-product', component: CreateProductComponent },
  { path: 'update-product/:productId', component: UpdateProductComponent },
  { path: 'get-product/:productId', component: AllProductComponent },
  { path: 'profile', component: ProfileeditorComponent },
  { path: 'upload-image/:productId', component: FileuploadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
