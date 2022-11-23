import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxAuthTypeComponent } from './tax-auth-type.component';

describe('TaxAuthTypeComponent', () => {
  let component: TaxAuthTypeComponent;
  let fixture: ComponentFixture<TaxAuthTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxAuthTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxAuthTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
