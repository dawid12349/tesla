import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarsComponent } from './page-cars.component';

describe('PageCarsComponent', () => {
  let component: PageCarsComponent;
  let fixture: ComponentFixture<PageCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
