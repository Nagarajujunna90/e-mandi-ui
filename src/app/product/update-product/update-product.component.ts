import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../image';
import { ImageService } from '../image.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: any;
  product: Product;
  productForm: FormGroup;
  url: string | ArrayBuffer | null;
  imageArray: Image[];
  file: File;
  imageObj: Image
  imageId: number
  imageData:Blob
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('productId')
    this.productService.getProductById(this.id).subscribe((data) => {
      this.product = data;
      this.imageData=this.product.image,
      this.productForm.patchValue({
        id: this.product.id,
        name: this.product.name,
        company: this.product.company,
        description: this.product.description,
        price: this.product.price
        
      })
    })

  }
  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private imageService: ImageService
  ) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      company: [''],
      image: [''],
      imageId: ['']
    })
  }

  submitForm() {
    console.log(this.imageId)
     this.productForm.controls['imageId'].setValue(this.product.imageId);
    this.productService.updateProductById(this.id, this.productForm.value).subscribe((res: any) => {
      console.log('Product updated!', res)
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
        this.imageObj = data;
        this.imageId = data.id
        this.imageService.updateImageWithProduct(this.id, this.imageObj.id).subscribe(data => {
          console.log("updated with image Id",data)
          this.imageId=data.id
        })
        console.log("updated page")
        window.location.reload();
      });
  }
}



