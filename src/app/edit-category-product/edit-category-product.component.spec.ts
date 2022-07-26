import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryProductComponent } from './edit-category-product.component';

describe('EditCategoryProductComponent', () => {
  let component: EditCategoryProductComponent;
  let fixture: ComponentFixture<EditCategoryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCategoryProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
