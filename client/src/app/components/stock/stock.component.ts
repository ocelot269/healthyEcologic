import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  products:any = [] ;

  constructor(private userService:UserService,
              private productsService:ProductsService) { }


  ngOnInit(): void {
        this.productsService.getProductsByProviderList('3').subscribe(
          res => {
            console.log(res);
            this.products = res;
          },
          err => console.log(err)
        );
  }
}

