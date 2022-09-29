import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivtComponent } from './givt.component';

describe('GivtComponent', () => {
  let component: GivtComponent;
  let fixture: ComponentFixture<GivtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GivtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
