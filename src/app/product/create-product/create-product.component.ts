import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {

  productForm: FormGroup;

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      company: [''],
    })
  }
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public productService: ProductService
  ) { }

  submitForm() {
    this.productService.create(this.productForm.value).subscribe((res: any) => {
      console.log('Product created!', res)
      this.router.navigateByUrl('/get-products')
    });
  }
 
}

