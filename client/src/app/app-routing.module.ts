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


const routes: Routes = [
  {
    path: '',
    component:NavigationComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
