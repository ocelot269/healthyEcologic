import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css'],

})
export class ShoppingBasketComponent implements OnInit {
  @Input() basketElements: any = [];
  @Input() goBasket: boolean = false;

  constructor() { }

  ngOnInit(): void {




    // if (this.basketElements) {
    //   if (localStorage.getItem('productsBasketList')) {
    //     this.basketElements =  JSON.parse(localStorage.getItem('productsBasketList'));
    //   }
    //   if (localStorage.getItem('productsBasketList')) {
    //     this.basketElements =  JSON.parse(localStorage.getItem('productsBasketList'));
    //   }
    //   }else {
    //     this.basketElements = [];
    //   }
  }


  calculateQuantity(i){
    return Math.round((this.basketElements[i].buyKilos * this.basketElements[i].price) * 100) / 100;
  }

  calculateAllCesta(){
    let total = 0;
    this.basketElements.forEach(element => {
      total+= element.buyKilos * element.price;
    });
    localStorage.setItem('productsBasketList', JSON.stringify(this.basketElements));
    return Math.round(total * 100) / 100;
  }

  deleteProductBasket(i){
    this.basketElements.splice(i,1);
    localStorage.removeItem("productsBasketList");
    localStorage.setItem('productsBasketList', JSON.stringify(this.basketElements));
  }

}
