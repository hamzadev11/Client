import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryProductService } from '../service/category-product.service';
import { CommentsService } from '../service/comments.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  form: any;
  formulaire:any
  addProduct:any;
  comments:any;
  productsCategory: any;
  category: string="";
  id: any;
  produits:any;
  image:any;
  currentNote:number=3;
  constructor(private commentService: CommentsService,private fb:FormBuilder, private routes:Router, private productService:ProductService, private productCategoryService:CategoryProductService,  private url:ActivatedRoute) { 
    this.addProduct=fb.group(
      {
        nomProd:['',Validators.required],
        description:['',Validators.required],
        quantiteProd:['',Validators.required],
        productCategoryId:['',Validators.required],
        categorieProduit:['',Validators.required],
        prix:['',Validators.required],
        image:['',Validators.required],
      }
    );
    this.comments=fb.group(
      {
        user:['',Validators.required],
        note:['',Validators.required],
        description:['',Validators.required],

      }
    )
  }
  loadImage(){
    this.id=this.url.snapshot.params['id'];
    console.log(this.id);
    this.productService.singleProduct(this.id).subscribe(data=>{
      //this.addProduct.patchValue(data);
      this.produits=data;
      this.image= this.produits.image

    });
  }
  ngOnInit(): void {
    this.form=new FormGroup ({
      user:new FormControl(null),
      description:new FormControl(null),
      note:new FormControl(null),

    });
    this.id=this.url.snapshot.params['id'];
    console.log(this.id)
    this.productService.singleProduct(this.id).subscribe(data=>{
      this.addProduct.patchValue(data);
    });
    this.loadImage();
    this.loadComments();
    /*this.commentService.listCommentsByProduct(this.id).subscribe(data=>{
      this.comments.patchValue(data);
    });*/
   }
   loadComments(){
    this.id=this.url.snapshot.params['id'];
    console.log(">>>>>>>>>>>>>>>>>id "+this.id)
    /*this.commentService.listCommentsByProduct(this.id).subscribe(data=>{
      this.comments.patchValue(data);
      this.comments=data;
      console.log("loadComments>>>>>>>>>>>>"+data);*/
      this.commentService.listCommentsByProduct(this.id).subscribe((data:any)=>{
        console.log(data);
        this.comments=data;
    });

   }

  loadProductCategory(){
    this.productCategoryService.listProductCategory().subscribe((data:any)=>{
      console.log(data);
      this.productsCategory=data;
    });
  }
  onSubmit(){
    this.id=this.url.snapshot.params['id'];
    this.commentService.addCommentsByProduct(this.form.value.user, this.form.value.description,this.form.value.note,this.id).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(["/listProduit"])
    });
      this.form.reset();
    //this.imageData = null;
    /*this.id=this.url.snapshot.params['id'];
    console.log(this.id);
    this.commentService.addCommentsByProduct(this.id,this.comments.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(["/editProduct/"+this.id])
    });*/

  }
  

}
