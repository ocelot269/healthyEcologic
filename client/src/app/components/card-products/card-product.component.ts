import { Component, OnInit, Input } from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  @Input() products: any = [];
  @Input() idUser: any = [];
  constructor(private productsServices : ProductsService) { }

   producto: any = {
    id_provider:'',
    name_product: '',
    product_description: '',
    units: 0,
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
    let productoNuevo:any = {
      id_provider: '3',
      name_product: this.products[index].name_product,
      product_description: this.products[index].product_description,
      units: producto.units,
      price: this.products[index].price,
      kilos:producto.kilos,
      image:this.products[index].image,
    };
    this.productsServices.updateProduct(this.products[index].id_product, productoNuevo).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );

  }

  noNegativo(){
    if (this.producto.units < 0){
      this.producto.units = 0;
    }

    if (this.producto.kilos < 0) {
      this.producto.kilos = 0;
    }
  }

  redondearUnidades(){
    Math.floor(this.producto.units);
  }

  borrarProducto(i){

      this.productsServices.deleteProduct(this.products[i].id_product).subscribe(
      res => {
        console.log(i);
        this.products.splice(i,1);
      },
      err => console.log(err)
    )
  }

  getListProduct(){

    this.productsServices.getProductList().subscribe(
      res => {
        this.products = res;
        console.log(res)
      },
      err => console.log(err)
    );
  }

  añadirProduct(){

    this.productsServices.addProduct(this.producto).subscribe(
      res => {
        this.products = res;
        console.log(res)
      },
      err => console.log(err)
    );
  }

}
