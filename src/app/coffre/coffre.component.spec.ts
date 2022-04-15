import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffreComponent } from './coffre.component';

describe('CoffreComponent', () => {
  let component: CoffreComponent;
  let fixture: ComponentFixture<CoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
