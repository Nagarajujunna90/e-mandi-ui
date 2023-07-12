import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './all-product/all-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FileuploadComponent } from '../file/fileupload/fileupload.component';
import { ProfileeditorComponent } from '../user/profileeditor/profileeditor.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: 'get-products', component: AllProductComponent },
  { path: 'add-product', component: CreateProductComponent },
  { path: 'update-product/:productId', component: UpdateProductComponent },
  { path: 'get-product/:productId', component: AllProductComponent },
  { path: 'upload-image/:productId', component: FileuploadComponent },
  { path: 'cart',loadChildren: () => import('../cart/cart.module').then(x => x.CartModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
