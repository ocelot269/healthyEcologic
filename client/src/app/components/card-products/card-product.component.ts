import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {LoginService} from "../../services/login.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  @Input() products: any = [];
  @Input() stock:boolean = false;
  user  = null;
  @Output() onRequestBuy = new EventEmitter<any>();

  constructor(private productsServices: ProductsService,
              private loginService: LoginService,
              private userService:UserService,) { }

   producto: any = {
    id_provider:'',
    name_product: '',
    product_description: '',
    units: 0,
    price: 0,
    kilos:0,
    buyUnits:0,
    buykilos:0,
    image:''
  };

  ngOnInit() {
    if (this.loginService.getIdUser()) {
          this.userService.getUser(this.loginService.getIdUser()).subscribe(
      res => {
        this.user = res;
      },
      err => console.log(err)
    );
    }
  }

  guardarActulizarProducto(producto, index:number){
    this.noNegativo();
    this.redondearUnidades();

    let productoNuevo:any = {
      id_provider: this.loginService.getIdUser(),
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
        this.products.splice(i,1);
      },
      err => console.log(err)
    )
  }

  añadirProduct(){
    this.productsServices.addProduct(this.producto).subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    );
  }

  agregarProductoCesta(product,i){

    if ( product.buyUnits > product.units) { product.buyUnits = product.units;}
    if (product.buyUnits < 0){ product.buyUnits = 0; }
    if ( product.buyKilos > product.kilos) {product.buyKilos = product.kilos; }
    if (product.buyKilos < 0){ product.buyKilos = 0;}

    let productoNuevo:any = {
      id_provider: product.id_provider,
      id_product: product.id_product,
      name_product: product.name_product,
      product_description: product.product_description,
      units: product.units,
      price: product.price,
      kilos: product.kilos,
      image: product.image,
      buyKilos: product.buyKilos,
      buyUnits: product.buyUnits,
    };
    this.onRequestBuy.emit(productoNuevo);
  }

}
