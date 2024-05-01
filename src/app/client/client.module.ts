import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CreateCategorieComponent } from './components/create-categorie/create-categorie.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductComponent } from './services/product/product.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CreateProductComponent,
    CreateCategorieComponent,
    EditProductComponent,
    LoginComponent,
    LogoutComponent,
    PageNotFoundComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
