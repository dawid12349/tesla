import { Component, OnInit } from '@angular/core';
import {Addition, Order} from '../models';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendCommunicationService} from '../backend-communication.service';

@Component({
  selector: 'app-page-printing',
  templateUrl: './page-printing.component.html',
  styleUrls: ['./page-printing.component.css']
})
export class PagePrintingComponent implements OnInit {
  order: Order;
  version: Addition;
  wheels: Addition;
  seats: Addition;
  windows: Addition;
  interior: Addition;
  others: Addition;
  constructor(private route: ActivatedRoute, private router: Router, private db: BackendCommunicationService) { }
  ngOnInit(): void {
    this.db.getOrder(this.route.snapshot.queryParamMap.get('o_id'))
      .subscribe(order => { // callback
        this.order = order;
        this.order.additions.forEach(value => {
          if (value.type === 'Wheels') { this.wheels = value; }
          else if (value.type === 'Version') { this.version = value; }
          else if (value.type === 'Seats setup') { this.seats = value; }
          else if (value.type === 'Windows') { this.windows = value; }
          else if (value.type === 'Interior') { this.interior = value; }
          else if (value.type === 'Others') { this.others = value; }
        });
      });
  }

}
