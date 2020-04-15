import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product.routing';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddProductComponent,
    EditProductComponent,
    SearchProductComponent,
    ListProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ProductRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService]
})
export class ProductsModule { }
