import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Product } from './product';
import { Image } from './image';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private apiServer = "http://localhost:8084/product/v1";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }
  constructor(private httpClient: HttpClient) { }
  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer + '/product', JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/product/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/products')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  updateProductById(id: string, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.apiServer + '/product/' + id, JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  deleteProductById(id: number): Observable<any> {
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.httpClient.delete<any>(this.apiServer + '/product/' + id, requestOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
