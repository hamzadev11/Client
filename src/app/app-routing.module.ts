import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { CategoryViewProductComponent } from './category-view-product/category-view-product.component';
import { CommandeComponent } from './commande/commande.component';
import { CreateCategoryProductComponent } from './create-category-product/create-category-product.component';
import { DetailProgrammeComponent } from './detail-programme/detail-programme.component';
import { EditCategoryProductComponent } from './edit-category-product/edit-category-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListCategoryProductComponent } from './list-category-product/list-category-product.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { PanierComponent } from './panier/panier.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';
import { ProgrammeProxComponent } from './programme-prox/programme-prox.component';
import { ListProgrammeComponent } from './Programme/list-programme/list-programme.component';

const routes: Routes = [
  {    path :'', component:AppComponent },
  {    path :'product', component:ProductComponent  },
  {    path :'product-view/:id', component:ProductViewComponent  },
  {    path :'newProduct', component:AddProductComponent  },
  {    path :'editProduct/:id', component:EditProductComponent  },
  {    path :'newCategory', component:CreateCategoryProductComponent  },
  {    path :'listCategory', component:ListCategoryProductComponent  },
  {    path :'editCategory/:id', component:EditCategoryProductComponent  },
  {    path :'category-view/:id', component:CategoryViewProductComponent  },
  {    path :'#', component:AppComponent  },
  {path: 'panier', component: PanierComponent},
  {path: 'commande', component: CommandeComponent},
  {path: 'livraison', component: LivraisonComponent},
  {path:'programme', component: ListProgrammeComponent},
  {path:'programme/proximite', component: ProgrammeProxComponent },
  {path:'programme/:id', component: DetailProgrammeComponent }
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
