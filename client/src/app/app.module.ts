import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HealthyFormComponent } from './components/healthy-form/healthy-form.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule} from 'primeng/card';
import { ProductsService } from './services/products.service';
import { CommentService } from './services/comment.service';
import { SharedService } from './services/shared.service';


import { HttpClientModule } from '@angular/common/http';
import { ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputMaskModule} from 'primeng/inputmask';
import { FooterComponent } from './components/footer/footer.component';
import { StockComponent } from './components/stock/stock.component';
import { DialogModule} from 'primeng/dialog';
import { FieldsetModule} from 'primeng/fieldset';
import { GalleriaModule} from 'primeng/galleria';
import { FileUploadModule} from 'primeng/fileupload';
import { HealthyLoginComponent } from './components/healthy-login/healthy-login.component';
import { LoginService } from './services/login.service';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { BasketComponent } from './components/basket/basket.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { BillService } from './services/bill.service';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShoppingHistoryComponent } from './components/shopping-history/shopping-history.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { ComentsComponent } from './components/coments/coments.component';
import { Utils } from './services/utils';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HealthyFormComponent,
    CardProductComponent,
    FooterComponent,
    StockComponent,
    HealthyLoginComponent,
    ProductsComponent,
    ShoppingBasketComponent,
    BasketComponent,
    PaymentFormComponent,
    HomeComponent,
    ProfileComponent,
    ShoppingHistoryComponent,
    DetailsProductComponent,
    ComentsComponent,
    SidebarComponent,

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
    BrowserAnimationsModule,
    InputMaskModule,
    DialogModule,
    FieldsetModule,
    GalleriaModule,
    FileUploadModule
  ],
  providers: [
    ProductsService,
    LoginService,
    BillService,
    NavigationComponent,
    CommentService,
    Utils,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
