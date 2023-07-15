import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Image } from '../../file/image';
import { ImageService } from '../../file/image.service';
import { CartService } from '../../cart.service';
import { Cart } from '../../cart';
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  products: Product[] = [];
  currentUrl: any;
  imageData: Blob[] = []
  resImage: Image
  id: any;
  userId:number=1
  url: string | ArrayBuffer | null;
  imageArray: Image[];
  file: File;
  image: Image;
  cart = new Cart();

  constructor(public productService: ProductService, private imageService: ImageService,
     public cartService: CartService, public router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  deleteProductById(id: number) {
    this.productService.deleteProductById(id).subscribe(() => {
      this.ngOnInit();
    })
  }
 
  onFileChanged(event: any) {
    let reader = new FileReader();
    this.file = event.target.files[0]
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.url = reader.result;
    };

  }

  onUpload() {
    this.imageService.uploadImage(this.file)
      .subscribe((data) => {
        this.image = data;
        this.imageService.updateImageWithProduct(this.id, this.image.id).subscribe(data => {
          console.log("updated with image Id")
        })

        this.router.navigateByUrl('/get-products')

      });
  }

  addToCart(id: number) {
    console.log(id);
    this.cart.productId = id.toString();
    this.cart.customerId = 1;
    this.cartService.addCart(this.cart).subscribe((data) => {
      console.log("Product added successfully to your cart.")
    });
  }

  getMyCart() {
    this.cartService.getAllCartByUserId(this.userId).subscribe((data) => {
      console.log(data)
      this.router.navigateByUrl('get-carts')
    })
  }

}