import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs/internal/observable/throwError'

@Injectable({
  providedIn: 'root'
})
export class ApiMangerService {

  constructor(private http: HttpClient) { }

  getReceipt(obj: any) {
    return this.http.get('assets/receipt.json')
      .pipe(catchError((err) => throwError(err)));
  }
}
