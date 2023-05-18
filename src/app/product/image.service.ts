import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Image } from './image';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }
  private apiServer = "http://localhost:8084/image/v1";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }
  httpO = {
    headers: new HttpHeaders({
      responseType: 'application/octet-stream'
    }),
  };

  uploadImage(selectedFile: File): Observable<Image> {
    console.log("upload submitted")
    const uploadData = new FormData();
    uploadData.append('file', selectedFile);
    console.log(selectedFile)
    return this.httpClient.post<Image>(this.apiServer + '/image/uploadImage', uploadData).pipe(
      catchError(this.errorHandler)
    );
  }

  downloadImage(imageId: number) {
    this.httpClient.get(this.apiServer + '/image/downloadImage/' + imageId, this.httpO);
  }

  getAllImages() {
    return this.httpClient.get<Image[]>(this.apiServer + '/image/images')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  updateImageWithProduct(productId: number, ImageId: number): Observable<Product> {
    return this.httpClient.put<Product>(this.apiServer + '/image/update-product/' + productId + "/" + ImageId, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getImageById(imageId:number):Observable<Image> {
    return this.httpClient.get<Image>(this.apiServer + '/image/'+imageId)
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
