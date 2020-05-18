import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {MessageService} from 'primeng/api';

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
              private messageService: MessageService

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
     if (event.buyKilos < event.kilos || event.buyKilos) { event.buyKilos > 0 ||  event.buyKilos ? this.elementosCarro.push(event) : this.messageService.add({severity:'error', summary: 'No añadida cantidad', detail: event.buyKilos + ' unidades añadidas'}); }
     else { this.messageService.add({severity:'error', summary: 'Sin stock', detail:'sobrepasaste el limite con ' + event.buyKilos}); }
    }

}
