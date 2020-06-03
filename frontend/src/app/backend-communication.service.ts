import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car, Order} from './models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendCommunicationService {

  hostOrders = 'http:/localhost:3000/orders';
  hostCars = 'http:/localhost:3000/cars';

  constructor(private http: HttpClient) { }

  public getOrders() {
    return this.http.get( this.hostOrders );
  }
  public getOrder(id: string) {
    return this.http.get( this.hostOrders + '/' + id );
  }
  public postOrder(order: Order) {
    return this.http.post( this.hostOrders, order);
  }

  public getCars(): Observable<Car[]>{
    return this.http.get<Car[]>("http://192.168.1.133:3550/cars");
  }
  public getConfigure(id: string) {
    return this.http.get( this.hostCars + '/' + id + '/configure');
  }
}
