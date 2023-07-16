import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListedComponent } from './product-listed.component';

describe('ProductListedComponent', () => {
  let component: ProductListedComponent;
  let fixture: ComponentFixture<ProductListedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListedComponent]
    });
    fixture = TestBed.createComponent(ProductListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
