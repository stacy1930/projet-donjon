import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalierFirstComponent } from './escalier-first.component';

describe('EscalierFirstComponent', () => {
  let component: EscalierFirstComponent;
  let fixture: ComponentFixture<EscalierFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalierFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalierFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
