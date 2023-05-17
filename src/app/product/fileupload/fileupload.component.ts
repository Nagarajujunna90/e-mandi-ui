import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../image';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  id: any;
  products: Product;
  productForm: FormGroup;
  url: string | ArrayBuffer | null;
  imageArray: Image[];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public productService: ProductService, private sanitizer: DomSanitizer
  ) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('productId')
    this.getAllImages();
  }
  file: File;
  image: Image
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
    this.productService.uploadImage(this.file)
      .subscribe((data) => {
        this.image = data;
        this.productService.updateImageWithProduct(this.id, this.image.id).subscribe(data => {
          console.log("updated with image Id")
        })

        this.router.navigateByUrl('/get-products')

      });
  }
  imageNew: any
  getAllImages() {
    this.productService.getImages()
      .subscribe((data) => {
        this.imageArray = data;
        // this.imageArray.forEach(element => {
        //   let objectURL = URL.createObjectURL(element.data);
        //   this.imageNew = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        //   console.log("hello",this.imageNew)
        // });
        this.productService.updateImageWithProduct(this.id, this.image.id).subscribe(data => {
        })
        this.router.navigateByUrl('/get-products')
      });
  }

  downloadImage(id: number) {
    this.productService.downloadImage(id);
  }

}
