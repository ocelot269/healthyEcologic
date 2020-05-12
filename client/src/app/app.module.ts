import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HealthyFormComponent } from './components/healthy-form/healthy-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule} from 'primeng/card';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    ButtonModule,
    ToastModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    DropdownModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
