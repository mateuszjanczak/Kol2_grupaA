import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MJDataService {

  private url = `https://kol2tai.herokuapp.com`;

  constructor(private http: HttpClient) { }

  getOrderItems() {
    return this.http.get(`${this.url}/api/order/items`);
  }
  getOrderItemById(id: any) {
    return this.http.get(`${this.url}/api/order/items/${id}`);
  }

}
