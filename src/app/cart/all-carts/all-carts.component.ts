import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/cart';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-all-carts',
  templateUrl: './all-carts.component.html',
  styleUrls: ['./all-carts.component.css']
})
export class AllCartsComponent {
  products: any = [ ];
   order = new Array<Product>();

  carts: Cart[]
  product: Product
  constructor(public productService: ProductService, public cartService: CartService, public router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
  ngOnInit() {
    console.log("ngoninit item");
    this.fetchData()
    //this.getProductById();

  }

  id:number=1
  fetchData() {
    console.log('fetc')
    this.cartService.getAllCartByUserId(this.id).subscribe((data: Cart[]) => {
      this.carts = data;
      if (this.carts.length > 0) {
        this.carts.forEach(element => {
          this.productService.getProductById(element.productId).subscribe((data) => {
            this.order.push(data)
          })
        });
      }
    });
  }

  getProductById(id: string) {
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data
    })
  }
  removeFromCart(id: number) {
    this.cartService.removeItemFromCart(id).subscribe((data) => {
      console.log("removed item");
      this.ngOnDestroy();
    })
  }
  ngOnDestroy() {
    this.order.length = 0;
    this.fetchData()
  }
}


