import { Component, OnInit } from '@angular/core';
import {BackendCommunicationService} from '../backend-communication.service';

@Component({
  selector: 'app-comp-order',
  templateUrl: './comp-order.component.html',
  styleUrls: ['./comp-order.component.css']
})
export class CompOrderComponent implements OnInit {
  orders: Order[];
  constructor(private apiService: BackendCommunicationService) { }

  ngOnInit(): void {
    this.apiService.getOrders().subscribe((data: Order[]) => {
      console.log(data);
      this.orders = data;
    });
  }

}

export interface Order {
  id: string;
  car_id: string;
  color_id: string;
  customer_name: string;
  customer_phone: string;
  additions: string[];
}
