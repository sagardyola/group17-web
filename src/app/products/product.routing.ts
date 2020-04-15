import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
const productRoute: Routes = [
    {
        path: 'add',
        component: AddProductComponent
    },
    {
        path: 'edit/:id',
        component: EditProductComponent
    },
    {
        path: 'view',
        component: ListProductComponent
    },
    {
        path: 'search',
        component: SearchProductComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(productRoute)],
    exports: [RouterModule]
})

export class ProductRoutingModule {

}