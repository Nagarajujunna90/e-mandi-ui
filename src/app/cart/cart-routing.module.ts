import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCartsComponent } from './all-carts/all-carts.component';

const routes: Routes = [
  { path: 'get-carts', component: AllCartsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { 

}
