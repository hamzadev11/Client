import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryViewProductComponent } from './category-view-product.component';

describe('CategoryViewProductComponent', () => {
  let component: CategoryViewProductComponent;
  let fixture: ComponentFixture<CategoryViewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryViewProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
