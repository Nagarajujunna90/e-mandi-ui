import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  products: Product[] = [];
  currentUrl: any;
  constructor(public productService: ProductService,public router:Router) { this.router.routeReuseStrategy.shouldReuseRoute = () => {
    return false;
  };}


  ngOnInit() {
    this.fetchData()
  }
  fetchData(){
    this.productService.getAll().subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;
    })
  }
  delete(id:number){
    this.productService.delete(id).subscribe(()=>{
      this.ngOnInit();
    })
  }
}