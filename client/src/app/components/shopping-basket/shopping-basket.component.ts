import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css'],

})
export class ShoppingBasketComponent implements OnInit {
  @Input() basketElements: any = [];
  @Input() irCesta: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  calcularCantidad(i){
    //  this.actualizarProducto(i);
    return this.basketElements[i].buyKilos * this.basketElements[i].price;

  }

  calcularTotalCesta(){
    let total = 0;
    this.basketElements.forEach(element => {
      total+= element.buyKilos * element.price;
    });
    return total;
  }

  borrarProductoCesta(i){
    this.basketElements.splice(i,1);
    localStorage.removeItem("productsBasketList");
    localStorage.setItem('productsBasketList', JSON.stringify(this.basketElements));
  }

  // actualizarProducto(i){
  //   let id = this.basketElements[i].id_product;
  //   console.log();
  //   if ( this.basketElements.includes(id)) {
  //     console.log("incluido");
  //   } else {
  //     console.log("no ncluido");
  //   }

  // }
}
