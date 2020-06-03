import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Addition, Car, Order, OrderPost} from './models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendCommunicationService {

  constructor(private http: HttpClient) { }

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>( "http://localhost:3550/orders" );
  }
  public getOrder(id: string): Observable<Order> {
    return this.http.get<Order>( "http://localhost:3550/orders" + '/' + id );
  }
  public deleteOrder(id: string) {
    this.http.delete( "http://localhost:3550/orders" + '/' + id );
  }
  public postOrder(order: OrderPost): Observable<OrderPost> {
    return this.http.post<OrderPost>( "http://localhost:3550/orders", order);
  }
  public getCars(): Observable<Car[]>{
    return this.http.get<Car[]>("http://localhost:3550/cars");
  }
  public getAdditions(): Observable<Addition[]>{
    return this.http.get<Addition[]>("http://localhost:3550/additions");
  }

}
