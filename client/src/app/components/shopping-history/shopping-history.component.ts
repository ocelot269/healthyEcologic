import { Component, OnInit } from '@angular/core';
import { BillService } from "../../services/bill.service";

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.css']
})
export class ShoppingHistoryComponent implements OnInit {
  userId = null;
  listShopping: any = null;
  constructor(
      private billService: BillService,
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('idUser');
    if (this.userId) {
       this.billService.getHistoyShoppingByIdUser(this.userId).subscribe(
        res => {
          this.listShopping = res;
          console.log(res);
        },
        err =>{
          console.log(err);
        });
    }

  }

}
