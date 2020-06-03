import { Component, OnInit } from '@angular/core';
import {Addition, Order} from "../models";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendCommunicationService} from "../backend-communication.service";

@Component({
  selector: 'app-page-order-info',
  templateUrl: './page-order-info.component.html',
  styleUrls: ['./page-order-info.component.css']
})
export class PageOrderInfoComponent implements OnInit {
  order: Order;
  version: Addition;
  wheels: Addition;
  seats: Addition;
  windows: Addition;
  interior: Addition;
  constructor(private route: ActivatedRoute, private router: Router, private db: BackendCommunicationService) { }
  ngOnInit(): void {
    this.db.getOrder(this.route.snapshot.queryParamMap.get('o_id'))
      .subscribe(order => { // callback
        this.order = order;
        this.order.additions.forEach(value => {
            if (value.type === 'Wheels') { this.wheels = value; }
            if (value.type === 'Version') { this.wheels = value; }
            if (value.type === 'Seats setup') { this.wheels = value; }
            if (value.type === 'Interior') { this.wheels = value; }
        });
      });
  }

  toPrint(id: string) {
    this.router.navigate(['print'], { queryParams: { o_id: id}});
  }
  delete(id: string) {
    this.db.deleteOrder(id);
  }
}
