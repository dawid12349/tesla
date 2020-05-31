import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Color} from '../models';

@Component({
  selector: 'app-page-configuration',
  templateUrl: './page-configuration.component.html',
  styleUrls: ['./page-configuration.component.css']
})
export class PageConfigurationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute) {}

    colors: Color[];
  ngOnInit(): void {
    // tslint:disable-next-line:triple-equals
    if (this.route.snapshot.queryParamMap.get('car') == 'model-s'){
      document.getElementById('bg').setAttribute('class', 'bg-s');
    }
    // tslint:disable-next-line:triple-equals
    if (this.route.snapshot.queryParamMap.get('car') == 'model-3'){
      document.getElementById('bg').setAttribute('class', 'bg-3');
    }
    // tslint:disable-next-line:triple-equals
    if (this.route.snapshot.queryParamMap.get('car') == 'model-x'){
      document.getElementById('bg').setAttribute('class', 'bg-x');
    }
    // tslint:disable-next-line:triple-equals
    if (this.route.snapshot.queryParamMap.get('car') == 'model-y'){
      document.getElementById('bg').setAttribute('class', 'bg-y');
    }
  }

  color1() {
    document.getElementById('color1bg').setAttribute('class', 'color-bg-bg-selected');
    document.getElementById('color2bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color3bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color4bg').setAttribute('class', 'color-bg-bg');
  }
  color2() {
    document.getElementById('color1bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color2bg').setAttribute('class', 'color-bg-bg-selected');
    document.getElementById('color3bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color4bg').setAttribute('class', 'color-bg-bg');
  }
  color3() {
    document.getElementById('color1bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color2bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color3bg').setAttribute('class', 'color-bg-bg-selected');
    document.getElementById('color4bg').setAttribute('class', 'color-bg-bg');
  }
  color4() {
    document.getElementById('color1bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color2bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color3bg').setAttribute('class', 'color-bg-bg');
    document.getElementById('color4bg').setAttribute('class', 'color-bg-bg-selected');
  }

  submit() {
  }
}
