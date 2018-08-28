import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
  }
)

export class ProductService{
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts() : Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log(`All: `+JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err : HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      // A client-side or network error occured. Handle it  accordingly.
      errorMessage = `A client-side or network error occured:${err.error.message}`;
    }else{
      // The backend returned an unsuccessful response code.
      errorMessage = `The backend returned an unsuccessful response code: ${err.status}, Error message is: ${err.status}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
