import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {MessageService} from 'primeng/api';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [MessageService]
})
export class ProductsComponent implements OnInit {
  products:any = [];
  elementosCarro:any = [];
  constructor(private productsService: ProductsService,
              private messageService: MessageService,
              private loginService: LoginService

  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
      this.productsService.getProductList().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    );
    }

    obtenerProductosCarrito(event){
      let encontrado = false;
     if (event.buyKilos < event.kilos || event.buyKilos) {
       if (event.buyKilos > 0 ||  event.buyKilos) {
        this.elementosCarro.forEach((element,index) => {
          let totalKilos = event.buyKilos + element.buyKilos;
          if (event.id_product == element.id_product &&  totalKilos < event.kilos ) {
            this.elementosCarro[index].buyKilos = totalKilos;
            encontrado = true;
          }else if (event.id_product == element.id_product &&  totalKilos >= event.kilos ){
            this.elementosCarro[index] = event;
            encontrado = true;
          }
        });
        if(!encontrado){
          this.elementosCarro.push(event);
          this.loginService.setProductsBasket(this.elementosCarro);
        }

       }else {
         this.messageService.add({severity:'error', summary: 'No añadida cantidad', detail: event.buyKilos + ' unidades añadidas'});
       }
     }else {
       this.messageService.add({severity:'error', summary: 'Error con los kilos', detail:'Kilos no validos'});
      }
    }

}
