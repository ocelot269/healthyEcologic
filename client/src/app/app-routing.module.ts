import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent} from "./components/products-list/products-list.component";
const routes: Routes = [
  {
    path: '',
    redirectTo:'/productos',
    pathMatch: 'full'
  },
  {
    path:'productos',
    component:ProductsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
