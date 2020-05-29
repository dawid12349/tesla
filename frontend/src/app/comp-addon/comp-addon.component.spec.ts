import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAddonComponent } from './comp-addon.component';

describe('CompAddonComponent', () => {
  let component: CompAddonComponent;
  let fixture: ComponentFixture<CompAddonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompAddonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
