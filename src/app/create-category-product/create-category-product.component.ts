import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryProductService } from '../service/category-product.service';

@Component({
  selector: 'app-create-category-product',
  templateUrl: './create-category-product.component.html',
  styleUrls: ['./create-category-product.component.css']
})
export class CreateCategoryProductComponent implements OnInit {
  addCtegoryProduct:any;

  constructor(private fb:FormBuilder, private routes:Router, private categoryProductService:CategoryProductService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
    console.log(this.addCtegoryProduct.value);
    this.categoryProductService.addProductCategory(this.addCtegoryProduct.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(["/listCategory"]);
    });

  }
}
