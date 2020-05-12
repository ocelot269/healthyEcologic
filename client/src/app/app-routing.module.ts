import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent} from "./components/products-list/products-list.component";
import { HealthyFormComponent } from "./components/healthy-form/healthy-form.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
const routes: Routes = [
  {
    path: '',
    component:NavigationComponent,
  },
  {
    path:'proveedor/stock',
    component:ProductsListComponent
  },
  {
    path:'healthy/form',
    component:HealthyFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
