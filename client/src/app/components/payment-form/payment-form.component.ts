import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
  providers: [MessageService]
})
export class PaymentFormComponent implements OnInit {

  formularioTargeta: FormGroup;
  regexNumeros = '/^([0-9])*$/';
  constructor(private fb: FormBuilder,
  private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.formularioTargeta = this.fb.group({
        'digitsPart1': new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.max(4),Validators.pattern(this.regexNumeros)])),
        'digitsPart2': new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.max(4),Validators.pattern(this.regexNumeros)])),
        'digitsPart3': new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.max(4),Validators.pattern(this.regexNumeros)])),
        'digitsPart4': new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.max(4),Validators.pattern(this.regexNumeros)])),
        'name': new FormControl('', Validators.required),
        'month': new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.max(4),Validators.pattern(this.regexNumeros)])),
        'year': new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.max(4),Validators.pattern(this.regexNumeros)])),
        'cvv': new FormControl('', Validators.compose([Validators.required,Validators.minLength(3),Validators.max(3),Validators.pattern(this.regexNumeros)]))
    });
  }



}
