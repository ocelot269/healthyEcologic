import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-healthy-form',
  templateUrl: './healthy-form.component.html',
  styleUrls: ['./healthy-form.component.css'],
  providers: [MessageService]
})
export class HealthyFormComponent implements OnInit {

 formUsuario: FormGroup;

    submitted: boolean;

    genero: SelectItem[];

    descripcion: string;

    constructor(private fb: FormBuilder, private messageService: MessageService) {}

    ngOnInit() {
        this.formUsuario = this.fb.group({
            'nombre': new FormControl('', Validators.required),
            'apellidos': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'RepitePassword': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
            'descripcion': new FormControl(''),
            'genero': new FormControl('', Validators.required)
        });

        this.genero = [
          {label:'Selecciona genero', value:''},
          {label:'Hombre', value:'Hombre'},
          {label:'Mujer', value:'Mujer'}
        ];
    }

    onSubmit(value: string) {
        this.submitted = true;
        this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
    }

    get diagnostic() { return JSON.stringify(this.formUsuario.value); }

}

