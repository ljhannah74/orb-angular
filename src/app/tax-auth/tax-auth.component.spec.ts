import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxAuthComponent } from './tax-auth.component';

describe('TaxAuthComponent', () => {
  let component: TaxAuthComponent;
  let fixture: ComponentFixture<TaxAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
