import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: any;
  products: Product;
  productForm: FormGroup;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('productId')
    this.productService.getById(this.id).subscribe((data) => {
      this.products = data;
      console.log(this.products)
      this.productForm.patchValue({
        id: this.products.id,
        name: this.products.name,
        company:this.products.company,
        description:this.products.description,
        price:this.products.price
      })
    })

  }
  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router:Router,
    public productService: ProductService
  ) { this.productForm = this.fb.group({
    name: [''],
    description: [''],
    price: [''],
    company: [''],
  }) }
  submitForm() {
    this.productService.update( this.id , this.productForm.value).subscribe((res: any) => {
      console.log('Product updated!', res)
     this.router.navigateByUrl('/get-products')
    });
  }

}



