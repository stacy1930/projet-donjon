import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetRdcComponent } from './reset-rdc.component';

describe('ResetRdcComponent', () => {
  let component: ResetRdcComponent;
  let fixture: ComponentFixture<ResetRdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetRdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetRdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
