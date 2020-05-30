import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompOrderComponent } from './comp-order.component';

describe('CompOrderComponent', () => {
  let component: CompOrderComponent;
  let fixture: ComponentFixture<CompOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
