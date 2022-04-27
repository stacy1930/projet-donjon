import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouloirComponent } from './couloir.component';

describe('CouloirComponent', () => {
  let component: CouloirComponent;
  let fixture: ComponentFixture<CouloirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouloirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouloirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
