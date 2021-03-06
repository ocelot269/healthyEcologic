import {Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import { BillService } from "../../services/bill.service";
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
  providers: [MessageService]
})
export class PaymentFormComponent implements OnInit {

  targetForm: FormGroup;
  userId = null;
  products = null;
  constructor(private fb: FormBuilder,
  private messageService: MessageService,
  private router: Router,
  private billService: BillService,
  private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('idUser');
    this.products = JSON.parse(localStorage.getItem('productsBasketList'));
    this.targetForm = this.fb.group({
        'digitsPart1': new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(4)])),
        'digitsPart2': new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(4)])),
        'digitsPart3': new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(4)])),
        'digitsPart4': new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(4)])),
        'name': new FormControl('', Validators.required),
        'month': new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(4)])),
        'year': new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(4)])),
        'cvv': new FormControl('', Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(3)]))
    });

  }

    calculateTotal(){
    let totalBasket = 0;
    this.products.forEach(element => {
      totalBasket+= element.buyKilos * element.price;
    });
    return totalBasket;
  }




    validarForm(form){
      for (const key in form) {
        if (form.hasOwnProperty(key)) {
          const element = form[key];
          if (element) {
              //vacio de momento
          }else {
            return this.messageService.add({severity:'error', summary: 'Datos Incorrectos', detail:'Datos no validos'});        }
          }
        }
       let dates = {
          id_user :  parseInt(this.userId),
          price: this.calculateTotal() ,
          discount: 0
        }
      this.billService.createBill(dates).subscribe(
          res => {
            this.products.forEach(element => {
               let dates = {
                  id_product: element.id_product,
                  id_order: res[0].id,
                  id_user: element.id_provider,
                  units: element.units,
                  kilos: element.buyKilos,
                  price: element.price * element.price
                  };
                  this.billService.createBillDetails(dates).subscribe(
                      respuesta => {
                      err => console.log(err);
                         },
                    err => console.log(err)
                  );
              });
          },
          err => console.log(err)
        );
      this.messageService.add({severity:'success', summary:'Compra aceptada', detail:'Compra aceptada redirigiendo a la pagina principal'});
      localStorage.removeItem("productsBasketList");
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 4000);
    }


}
