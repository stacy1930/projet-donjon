import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieuxComponent } from './vieux.component';

describe('VieuxComponent', () => {
  let component: VieuxComponent;
  let fixture: ComponentFixture<VieuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
