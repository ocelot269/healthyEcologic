import { Component, OnInit, Input } from '@angular/core';
import {ProductsService} from "../../services/products.service";
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() products: any = [];

  constructor(private productsServices : ProductsService) { }

   producto: any = {
    name: '',
    description: '',
    unidades: 0,
    price: 0,
    kilos:0,
    image:''
  };

  ngOnInit() {
    this.getListProduct();
  }

  guardarActulizarProducto(producto, index:number){
    this.noNegativo();
    this.redondearUnidades();
    let productoNuevo = {
      name: this.products[index].name,
      description: this.products[index].description,
      unidades: producto.unidades,
      price: this.products[index].price,
      kilos:producto.kilos,
      image:this.products[index].image,
    };
    this.productsServices.updateProduct(this.products[index].id, productoNuevo).subscribe(
      res => {
        console.log(res.texto);
      },
      err => console.log(err)
    );;

  }

  noNegativo(){
    if (this.producto.unidades < 0){
      this.producto.unidades = 0;
    }

    if (this.producto.kilos < 0) {
      this.producto.kilos = 0;
    }
  }

  redondearUnidades(){
    Math.floor(this.producto.unidades);
  }

  borrarProducto(i){

      this.productsServices.deleteProduct(this.products[i].id).subscribe(
      res => {
        this.products.splice(i,i+1);
      },
      err => console.log(err)
    )
  }

  getListProduct(){
    this.productsServices.getProductList().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    );
  }
}
