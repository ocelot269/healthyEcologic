import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})

export class BasketComponent implements OnInit {

  listaCesta:any = [];
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.listaCesta = JSON.parse(localStorage.getItem('productsBasketList'));
    console.log(JSON.parse(localStorage.getItem('productsBasketList')));
  }

  calcularTotal(){
    let totalCesta = 0;
    this.listaCesta.forEach(element => {
      totalCesta+= element.buyKilos * element.price;
    });
    return totalCesta;
  }


  }

