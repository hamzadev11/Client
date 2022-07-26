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


import { TypeEvenementFormComponent } from './type-evenement-form/type-evenement-form.component';
import { TypeEvenementListComponent } from './type-evenement-list/type-evenement-list.component';
import { TypeEvenementDetailsComponent } from './type-evenement-details/type-evenement-details.component';
import { EvenementListComponent } from './evenement-list/evenement-list.component';
import { EvenementFormComponent } from './evenement-form/evenement-form.component';
import { EvenementDetailsComponent } from './evenement-details/evenement-details.component';


import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthentifComponent } from './authentif/authentif.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { SignupComponent } from './signup/signup.component';
import { EspeceClientComponent } from './components/espece-client/espece-client.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';

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
  {path: 'panier', component: PanierComponent},
  {path: 'commande', component: CommandeComponent},
  {path: 'livraison', component: LivraisonComponent},
  {path:'programme', component: ListProgrammeComponent},
  {path:'programme/proximite', component: ProgrammeProxComponent },
  {path:'programme/:id', component: DetailProgrammeComponent },

  {path: 'typeEvenement', component: TypeEvenementListComponent},
  {path: 'typeEvenement/create', component: TypeEvenementFormComponent},
  {path: 'typeEvenement/show', component: TypeEvenementDetailsComponent},
  {path: 'evenement', component: EvenementListComponent},
  {path: 'evenement/create', component: EvenementFormComponent},
  {path: 'evenement/show', component: EvenementDetailsComponent},

  {path:'login', component: LoginComponent},
  {path:'registration/', component: AuthentifComponent },
  {path:'login/forgotpassword/', component: ForgotpasswordComponent },
  {path:'acceuil', component: AcceuilComponent},
  {path:'signup', component: SignupComponent},
  {path:'profil', component: ProfilComponent},
  {path:'membre', component: ProfilComponent},

  { path: 'especes-list-client', component: EspeceClientComponent },

 
  { path: 'categories-list', component: CategorieListComponent },




  {    path :'#', component:AppComponent  },


  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
