import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  idProduct = null;
  product = null;
  constructor(private routeActive: ActivatedRoute,
              private productsService: ProductsService) { }

  ngOnInit(): void {
    this.idProduct = this.routeActive.snapshot.params.id;
    this.productsService.getProduct(this.idProduct).subscribe(
      res => {
        this.product = res[0];
        this.product.buyKilos = 1;
      },
      err => console.log(err)
    );
  }

  addProduct(){
    let basketElements = JSON.parse(localStorage.getItem('productsBasketList')) ? JSON.parse(localStorage.getItem('productsBasketList')) : [];
    basketElements.push(this.product);
    console.log(basketElements);
    localStorage.removeItem("productsBasketList");
    localStorage.setItem('productsBasketList', JSON.stringify(basketElements));
  }

}
