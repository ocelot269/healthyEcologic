import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})

export class BasketComponent implements OnInit {

  listBasket:any = [];
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('productsBasketList'))) {
      this.listBasket = JSON.parse(localStorage.getItem('productsBasketList'));
    }
  }

  totalQuantity(){
    let basketTotal = 0;
    if ( this.listBasket) {
      this.listBasket.forEach(element => {
      basketTotal+= element.buyKilos * element.price;
    });
    return Math.round(basketTotal * 100) / 100;
    }

  }


  }

