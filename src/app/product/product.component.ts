import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  searchText:any;

  constructor(private productService:ProductService,
    private routes:Router) { }

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct(){
    this.productService.listProduct().subscribe((data:any)=>{
      console.log(data);
      this.products=data;
    });
  }
  editProduct(data:any){

  }
  deleteProduct(datas:any){
    this.productService.deleteProduct(datas).subscribe((data)=>{
      console.log(data);
      this.products= this.products.filter((u:any)=>u!==datas)
    })
  }

}
