import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmnistratComponent } from './omnistrat.component';

describe('OmnistratComponent', () => {
  let component: OmnistratComponent;
  let fixture: ComponentFixture<OmnistratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmnistratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmnistratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
