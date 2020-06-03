import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BackendCommunicationService} from '../backend-communication.service';
import {Car} from '../models';

@Component({
  selector: 'app-page-cars',
  templateUrl: './page-cars.component.html',
  styleUrls: ['./page-cars.component.css']
})

export class PageCarsComponent implements OnInit {
  cars: Car[];
  selectedCar: Car;
  constructor(private router: Router, private db: BackendCommunicationService) { }
  ngOnInit(): void {
    this.db.getCars()
      .subscribe(cars => { // callback
        this.cars = cars;
        this.selectedCar = (this.cars)[1];
      });
  }
  toS() {
    document.getElementById('models').setAttribute('class', 'border_button_active');
    document.getElementById('model3').setAttribute('class', 'border_button_not_active');
    document.getElementById('modelx').setAttribute('class', 'border_button_not_active');
    document.getElementById('modely').setAttribute('class', 'border_button_not_active');
    document.getElementById('bg').setAttribute('class', 'bg-s');
    this.selectedCar = this.cars[1];
  }

  to3() {
    document.getElementById('models').setAttribute('class', 'border_button_not_active');
    document.getElementById('model3').setAttribute('class', 'border_button_active');
    document.getElementById('modelx').setAttribute('class', 'border_button_not_active');
    document.getElementById('modely').setAttribute('class', 'border_button_not_active');
    document.getElementById('bg').setAttribute('class', 'bg-3');
    this.selectedCar = this.cars[2];
  }

  toX() {
    document.getElementById('models').setAttribute('class', 'border_button_not_active');
    document.getElementById('model3').setAttribute('class', 'border_button_not_active');
    document.getElementById('modelx').setAttribute('class', 'border_button_active');
    document.getElementById('modely').setAttribute('class', 'border_button_not_active');
    document.getElementById('bg').setAttribute('class', 'bg-x');
    this.selectedCar = this.cars[0];
  }

  toY() {
    document.getElementById('models').setAttribute('class', 'border_button_not_active');
    document.getElementById('model3').setAttribute('class', 'border_button_not_active');
    document.getElementById('modelx').setAttribute('class', 'border_button_not_active');
    document.getElementById('modely').setAttribute('class', 'border_button_active');
    document.getElementById('bg').setAttribute('class', 'bg-y');
    this.selectedCar = this.cars[3];
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
      this.router.navigate(['configuration'], {queryParams: {car: 'model-y'}});
    }

  }

}






