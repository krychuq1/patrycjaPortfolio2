import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Givt2Component } from './givt2.component';

describe('Givt2Component', () => {
  let component: Givt2Component;
  let fixture: ComponentFixture<Givt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Givt2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Givt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
