import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Image } from '../../file/image';
import { ImageService } from '../../file/image.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {
  id: any;
  products: Product;
  productForm: FormGroup;
  url: string | ArrayBuffer | null;
  imageArray: Image[];
  file: File;
  image: Image
  imageId:number

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      company: [''],
      imageId:['',Validators.required]
    })
  }
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public productService: ProductService,
    private imageService:ImageService
  ) { }

  submitForm() {
    this.productForm.controls['imageId'].setValue(this.imageId);
    this.productService.createProduct(this.productForm.value).subscribe((res: any) => {
      console.log('Product created!', this.productForm.value)
      this.router.navigateByUrl('/get-products')
    });
  }
  onFileChanged(event: any) {
    let reader = new FileReader();
    this.file = event.target.files[0]
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    // reader.onload = () => {
    //   this.url = reader.result;
    // };

  }

  onUpload() {
    this.imageService.uploadImage(this.file)
      .subscribe((data) => {
        this.image = data;
        this.imageId=data.id
        // this.imageService.updateImageWithProduct(this.id, this.image.id).subscribe(data => {
        //   console.log("updated with image Id",data)
        //   this.imageId=data.id
        // })
        //this.router.navigateByUrl('/get-products')
      });
  }
}

