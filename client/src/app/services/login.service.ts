import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private idUser:any = null;
  private logged:boolean = false;
  private productsBasket:any = [];
  constructor() { }

    setIdUser(data:any) {
        this.idUser = data;
        localStorage.setItem('idUser', data);
    }

    getIdUser() {
      return this.idUser ? this.idUser : localStorage.getItem('idUser');
    }

    setLogged(data: any){
      this.logged = data;
      localStorage.setItem('logeado', data);
    }

    isLogged() {
      return <any> localStorage.getItem('logeado');
    }

    getProductsBasket(){
      return this.productsBasket ? this.productsBasket : JSON.parse(localStorage.getItem('productsBasketList'));
    }

    setProductsBasket(list){
      this.productsBasket = [];
      this.productsBasket = list;

      localStorage.setItem('productsBasketList', JSON.stringify(list));
    }
}

