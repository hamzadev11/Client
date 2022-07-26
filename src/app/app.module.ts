import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateCategoryProductComponent } from './create-category-product/create-category-product.component';
import { ListCategoryProductComponent } from './list-category-product/list-category-product.component';
import { EditCategoryProductComponent } from './edit-category-product/edit-category-product.component';
import { CategoryViewProductComponent } from './category-view-product/category-view-product.component';
import { QRCodeModule } from "angular2-qrcode";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LivraisonComponent } from './livraison/livraison.component';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { registerLocaleData } from '@angular/common';
import frenchLocale from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import { ProgrammeProxComponent } from './programme-prox/programme-prox.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { DetailProgrammeComponent } from './detail-programme/detail-programme.component';
import { ListProgrammeComponent } from './Programme/list-programme/list-programme.component';

import { TypeEvenementFormComponent } from './type-evenement-form/type-evenement-form.component';
import { TypeEvenementListComponent } from './type-evenement-list/type-evenement-list.component';
import { TypeEvenementDetailsComponent } from './type-evenement-details/type-evenement-details.component';
import { EvenementListComponent } from './evenement-list/evenement-list.component';
import { EvenementDetailsComponent } from './evenement-details/evenement-details.component';
import { EvenementFormComponent } from './evenement-form/evenement-form.component';


import { AuthentifComponent } from './authentif/authentif.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SignupComponent } from './signup/signup.component';
import { ProfilComponent } from './profil/profil.component';
import { EspeceCreateComponent } from './components/espece-create/espece-create.component';
import { EspeceEditComponent } from './components/espece-edit/espece-edit.component';
import { EspeceListComponent } from './components/espece-list/espece-list.component';
import { CategorieCreateComponent } from './components/categorie-create/categorie-create.component';
import { CategorieEditComponent } from './components/categorie-edit/categorie-edit.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';
import { ApiComponent } from './components/api/api.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EspeceClientComponent } from './components/espece-client/espece-client.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ProductViewComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
    CreateCategoryProductComponent,
    ListCategoryProductComponent,
    EditCategoryProductComponent,
    CategoryViewProductComponent,
    ListProgrammeComponent,
    
    DetailProgrammeComponent,
    WeatherWidgetComponent,
    ProgrammeProxComponent,
    
    LivraisonComponent,
    PanierComponent,
    CommandeComponent,
    TypeEvenementFormComponent,
    TypeEvenementListComponent,
    TypeEvenementDetailsComponent,
    EvenementListComponent,
    EvenementDetailsComponent,
    EvenementFormComponent,


    ListProgrammeComponent,
    AuthentifComponent,
    LoginComponent,
    ForgotpasswordComponent,
    AcceuilComponent,
    SignupComponent,
    ProfilComponent,


    EspeceCreateComponent,
    EspeceEditComponent,
    EspeceListComponent,
    CategorieCreateComponent,
    CategorieEditComponent,
    CategorieListComponent,
 
    
    EspeceClientComponent,
    NavbarComponent,
    ApiComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,//pour les formulaires -->pour utiliser le "ngModel"
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    QRCodeModule,
    NgbModule,
    Ng2SearchPipeModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent]
})
export class AppModule { }
