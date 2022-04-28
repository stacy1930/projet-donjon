import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtageTroisAcceuilComponent } from './etage-trois-acceuil.component';

describe('EtageTroisAcceuilComponent', () => {
  let component: EtageTroisAcceuilComponent;
  let fixture: ComponentFixture<EtageTroisAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtageTroisAcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtageTroisAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
