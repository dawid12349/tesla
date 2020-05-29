import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThanksComponent } from './page-thanks.component';

describe('PageThanksComponent', () => {
  let component: PageThanksComponent;
  let fixture: ComponentFixture<PageThanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageThanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
