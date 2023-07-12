import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Cart } from './cart';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartUri = "http://localhost:8082/customer/v1/";
  asText = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain; charset=utf-8',
      responseType: 'text'
    })
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private httpClient: HttpClient) { }


  addCart(cart: Cart): Observable<String> {
    return this.httpClient.post<string>(this.cartUri + 'cart', JSON.stringify(cart), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAllCartByUserId(id:number): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(this.cartUri + 'carts/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
   httpOps : Object = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'text/plain; charset=utf-8'
    }),
    responseType: 'text'
  };
  removeItemFromCart(id: number): Observable<string> {
    return this.httpClient.delete<string>(this.cartUri + 'cart/' + id,this.httpOps)
      .pipe(catchError(this.errorHandler))
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
