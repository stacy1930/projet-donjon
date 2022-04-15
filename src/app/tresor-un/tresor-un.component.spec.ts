import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorUnComponent } from './tresor-un.component';

describe('TresorUnComponent', () => {
  let component: TresorUnComponent;
  let fixture: ComponentFixture<TresorUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresorUnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TresorUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
