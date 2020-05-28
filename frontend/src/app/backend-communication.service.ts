import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './comp-order/comp-order.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendCommunicationService {

  hostOrders = 'localhost:3001/orders';

  constructor(private http: HttpClient) { }

  public getOrders() {
    return this.http.get( this.hostOrders );
  }
  public getOrder(id: string) {
    return this.http.get( this.hostOrders + id );
  }
  public postOrder(order: Order) {
    return this.http.post( this.hostOrders, order);
  }
}
