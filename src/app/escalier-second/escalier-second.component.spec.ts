import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalierSecondComponent } from './escalier-second.component';

describe('EscalierSecondComponent', () => {
  let component: EscalierSecondComponent;
  let fixture: ComponentFixture<EscalierSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalierSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalierSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
