import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Image } from '../image';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  products: Product[] = [];
  currentUrl: any;
  constructor(public productService: ProductService,private imageService:ImageService,public router:Router) { this.router.routeReuseStrategy.shouldReuseRoute = () => {
    return false;
  };}


  ngOnInit() {
    this.fetchData()
  }
  imageData:Blob[]=[]

  resImage:Image
  fetchData(){
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
     
      });
  }
  delete(id:number){
    this.productService.deleteProductById(id).subscribe(()=>{
      this.ngOnInit();
    })
  }
  id: any;
  url: string | ArrayBuffer | null;
  imageArray: Image[];
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
    this.imageService.uploadImage(this.file)
      .subscribe((data) => {
        this.image = data;
        this.imageService.updateImageWithProduct(this.id, this.image.id).subscribe(data => {
          console.log("updated with image Id")
        })

        this.router.navigateByUrl('/get-products')

      });
  }
}