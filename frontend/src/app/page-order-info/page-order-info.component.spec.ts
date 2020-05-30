import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOrderInfoComponent } from './page-order-info.component';

describe('PageOrderInfoComponent', () => {
  let component: PageOrderInfoComponent;
  let fixture: ComponentFixture<PageOrderInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOrderInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOrderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
