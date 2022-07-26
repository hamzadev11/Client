import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProduct:any;

  constructor(private fb:FormBuilder, private routes:Router, private productService:ProductService) { 
    this.addProduct=fb.group(
      {
        nomProd:['',Validators.required],
        description:['',Validators.required],
        quantiteProd:['',Validators.required],
        prix:['',Validators.required],
        image:['',Validators.required],
      }
    )
  }

  ngOnInit(): void {
  }
  onSubmit(){
    
    console.log(this.addProduct.value);
    this.productService.addProduct(this.addProduct.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(["/product"])
    });

  }

}
