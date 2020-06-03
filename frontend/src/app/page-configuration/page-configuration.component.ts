import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Addition, Color, Order, OrderPost} from '../models';
import {BackendCommunicationService} from "../backend-communication.service";

@Component({
  selector: 'app-page-configuration',
  templateUrl: './page-configuration.component.html',
  styleUrls: ['./page-configuration.component.css']
})
export class PageConfigurationComponent implements OnInit {
  order: OrderPost;
  version: string;
  window: string;
  wheel: string;
  seat: string;
  interior: string;
  ap: string;
  constructor(
    private route: ActivatedRoute, private db: BackendCommunicationService) {}
  ngOnInit(): void {
    // tslint:disable-next-line:triple-equals
    if (this.route.snapshot.queryParamMap.get('car') == 'model-s'){
      document.getElementById('bg').setAttribute('class', 'bg-s');
      this.order.car_id = '5ec2dac22ddcf74bc4b788a2';
    }
    // tslint:disable-next-line:triple-equals
    if (this.route.snapshot.queryParamMap.get('car') == 'model-3'){
      document.getElementById('bg').setAttribute('class', 'bg-3');
      this.order.car_id = '5ec2dac22ddcf74bc4b788a5';
    }
    // tslint:disable-next-line:triple-equals
    if (this.route.snapshot.queryParamMap.get('car') == 'model-x'){
      document.getElementById('bg').setAttribute('class', 'bg-x');
      this.order.car_id = '5ec2dac22ddcf74bc4b7889f';
    }
    // tslint:disable-next-line:triple-equals
    if (this.route.snapshot.queryParamMap.get('car') == 'model-y'){
      document.getElementById('bg').setAttribute('class', 'bg-y');
      this.order.car_id = '5ec2dac22ddcf74bc4b788a9';
    }
    this.order.color_id = '5ed224772159342b2cf9c795';
  }

  color1() {
    document.getElementById('color1bg').setAttribute('class', 'color-bg-bg-selected');
    document.getElementById('color2bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color3bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color4bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color4bg').setAttribute('class', 'color-bg-bg');
    this.order.color_id = '5ed224772159342b2cf9c795';
  }
  color2() {
    document.getElementById('color1bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color2bg').setAttribute('class', 'color-bg-bg-selected');
    document.getElementById('color3bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color4bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color5bg').setAttribute('class', 'color-bg-bg');
    this.order.color_id = '5ed224772159342b2cf9c798';
  }
  color3() {
    document.getElementById('color1bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color2bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color3bg').setAttribute('class', 'color-bg-bg-selected');
    document.getElementById('color4bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color5bg').setAttribute('class', 'color-bg-bg');
    this.order.color_id = '5ed224772159342b2cf9c79b';
  }
  color4() {
    document.getElementById('color1bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color2bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color3bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color4bg').setAttribute('class', 'color-bg-bg-selected');
    document.getElementById('color5bg').setAttribute('class', 'color-bg-bg');
    this.order.color_id = '5ed224772159342b2cf9c79e';
  }
  color5() {
    document.getElementById('color1bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color2bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color3bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color4bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color5bg').setAttribute('class', 'color-bg-bg-selected');
    this.order.color_id = '5ed224772159342b2cf9c7a1';
  }

  submit() {
    this.order.additions.join(this.wheel);
    this.order.additions.join(this.interior);
    this.order.additions.join(this.seat);
    this.order.additions.join(this.window);
    this.order.additions.join(this.ap);
    this.db.postOrder(this.order);
  }
}
