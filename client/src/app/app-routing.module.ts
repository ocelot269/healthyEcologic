import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardProductComponent} from "./components/card-products/card-product.component";
import { HealthyFormComponent } from "./components/healthy-form/healthy-form.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { StockComponent } from "./components/stock/stock.component";
import { HealthyLoginComponent } from "./components/healthy-login/healthy-login.component";
import { ProductsComponent } from './components/products/products.component';
import { BasketComponent } from './components/basket/basket.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ShoppingHistoryComponent } from './components/shopping-history/shopping-history.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'proveedor/stock',
    component:StockComponent
  },
  {
    path:'proveedor/registro',
    component:HealthyFormComponent
  },
  {
    path:'cliente/registro',
    component:HealthyFormComponent
  },
  {
    path:'login',
    component:HealthyLoginComponent
  },
  {
    path:'productos',
    component:ProductsComponent
  },
  {
    path:'cesta',
    component:BasketComponent
  },
  {
    path:'pago',
    component:PaymentFormComponent
  },
  {
    path:'perfil',
    component:PerfilComponent
  },
  {
    path:'historial',
    component:ShoppingHistoryComponent
  },
  {
    path:'detalles/:id',
    component:DetailsProductComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
