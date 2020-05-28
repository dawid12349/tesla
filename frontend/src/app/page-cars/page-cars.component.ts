import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-cars',
  templateUrl: './page-cars.component.html',
  styleUrls: ['./page-cars.component.css']
})

export class PageCarsComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  toS() {
    document.getElementById('models').setAttribute('class', 'border_button_active');
    document.getElementById('model3').setAttribute('class', 'border_button_not_active');
    document.getElementById('modelx').setAttribute('class', 'border_button_not_active');
    document.getElementById('modely').setAttribute('class', 'border_button_not_active');
    document.getElementById('bg').setAttribute('class', 'bg-s');
  }

  to3() {
    document.getElementById('models').setAttribute('class', 'border_button_not_active');
    document.getElementById('model3').setAttribute('class', 'border_button_active');
    document.getElementById('modelx').setAttribute('class', 'border_button_not_active');
    document.getElementById('modely').setAttribute('class', 'border_button_not_active');
    document.getElementById('bg').setAttribute('class', 'bg-3');
  }

  toX() {
    document.getElementById('models').setAttribute('class', 'border_button_not_active');
    document.getElementById('model3').setAttribute('class', 'border_button_not_active');
    document.getElementById('modelx').setAttribute('class', 'border_button_active');
    document.getElementById('modely').setAttribute('class', 'border_button_not_active');
    document.getElementById('bg').setAttribute('class', 'bg-x');
  }

  toY() {
    document.getElementById('models').setAttribute('class', 'border_button_not_active');
    document.getElementById('model3').setAttribute('class', 'border_button_not_active');
    document.getElementById('modelx').setAttribute('class', 'border_button_not_active');
    document.getElementById('modely').setAttribute('class', 'border_button_active');
    document.getElementById('bg').setAttribute('class', 'bg-y');
  }
  toConf() {
    // tslint:disable-next-line:triple-equals
    if (document.getElementById('bg').getAttribute('class') == 'bg-s') {
      this.router.navigate(['configuration'], { queryParams: { car: 'model-s'}});
    }
    // tslint:disable-next-line:triple-equals
    if (document.getElementById('bg').getAttribute('class') == 'bg-3') {
      this.router.navigate(['configuration'], { queryParams: { car: 'model-3'}});
    }
    // tslint:disable-next-line:triple-equals
    if (document.getElementById('bg').getAttribute('class') == 'bg-x') {
      this.router.navigate(['configuration'], { queryParams: { car: 'model-x'}});
    }
    // tslint:disable-next-line:triple-equals
    if (document.getElementById('bg').getAttribute('class') == 'bg-y') {
      this.router.navigate(['configuration'], { queryParams: { car: 'model-y'}});
    }
  }
}




