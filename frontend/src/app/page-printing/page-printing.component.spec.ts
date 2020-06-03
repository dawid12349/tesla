import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrintingComponent } from './page-printing.component';

describe('PagePrintingComponent', () => {
  let component: PagePrintingComponent;
  let fixture: ComponentFixture<PagePrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
