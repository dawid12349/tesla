import { Component, OnInit } from '@angular/core';
import {Order} from "../models";
import {Router} from "@angular/router";
import {BackendCommunicationService} from "../backend-communication.service";

@Component({
  selector: 'app-page-orders',
  templateUrl: './page-orders.component.html',
  styleUrls: ['./page-orders.component.css']
})
export class PageOrdersComponent implements OnInit {

  orders: Order[];
  constructor(private router: Router, private db: BackendCommunicationService) { }
  ngOnInit(): void {
    this.db.getOrders()
      .subscribe(orders => { // callback
        this.orders = orders;
      });
  }

  details(id: string) {
    this.router.navigate(['order-info'], { queryParams: { o_id: id}});
  }
}
