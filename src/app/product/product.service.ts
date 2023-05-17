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
  httpO = {
    headers: new HttpHeaders({
      responseType: 'application/octet-stream'
    }),
  };

  downloadImage(imageId: number) {
     this.httpClient.get(this.apiServer + '/product/downloadImage/'+imageId, this.httpO);
  }


  getImages() {
    return this.httpClient.get<Image[]>(this.apiServer + '/product/images')
      .pipe(
        catchError(this.errorHandler)
      )
  }
  updateImageWithProduct(productId: number, ImageId: number): Observable<Product> {
    return this.httpClient.put<Product>(this.apiServer + '/product/updateImage/' + productId + "/" + ImageId, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  private apiServer = "http://localhost:8084/product/v1";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }
  constructor(private httpClient: HttpClient) { }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer + '/product/', JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  uploadImage(selectedFile: File): Observable<Image> {
    const uploadData = new FormData();
    uploadData.append('file', selectedFile);
    console.log(selectedFile)

    return this.httpClient.post<Image>(this.apiServer + '/product/image', uploadData).pipe(
      catchError(this.errorHandler)
    );
  }
  getById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/product/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/products/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: string, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.apiServer + '/product/' + id, JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number): Observable<any> {
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
