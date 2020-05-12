import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HealthyFormComponent } from './components/healthy-form/healthy-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { CardModule} from 'primeng/card';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HealthyFormComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CardModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
