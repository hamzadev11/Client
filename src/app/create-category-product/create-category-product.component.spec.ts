import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryProductComponent } from './create-category-product.component';

describe('CreateCategoryProductComponent', () => {
  let component: CreateCategoryProductComponent;
  let fixture: ComponentFixture<CreateCategoryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCategoryProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
