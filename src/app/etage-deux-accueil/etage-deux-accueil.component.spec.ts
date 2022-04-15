import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtageDeuxAccueilComponent } from './etage-deux-accueil.component';

describe('EtageDeuxAccueilComponent', () => {
  let component: EtageDeuxAccueilComponent;
  let fixture: ComponentFixture<EtageDeuxAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtageDeuxAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtageDeuxAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
