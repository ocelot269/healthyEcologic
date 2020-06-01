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
      },
      err => console.log(err)
    );
  }

}
