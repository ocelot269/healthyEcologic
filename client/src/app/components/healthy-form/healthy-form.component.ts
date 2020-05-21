import { Component, OnInit,Input } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {UserService} from "../../services/user.service";
import { Router,RouterStateSnapshot  } from '@angular/router';


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

    tipoUsuario: string = 'Cliente';
    constructor(private fb: FormBuilder, private messageService: MessageService,
    private userService : UserService,
    private router: Router) {}

    ngOnInit() {

        this.seleccionarTipoUsuario();

        this.formUsuario = this.fb.group({
            'user_name': new FormControl('', Validators.required),
            'user_type': new FormControl(this.tipoUsuario),
            'user_surnames': new FormControl('', Validators.required),
            'user_email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
            'user_description': new FormControl(''),
            'user_gender': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(9)])),
            'repitePassword': new FormControl('', Validators.compose([Validators.required, Validators.minLength(9)])),
        });

        this.genero = [
          {label:'Selecciona genero', value:''},
          {label:'Hombre', value:'Hombre'},
          {label:'Mujer', value:'Mujer'}
        ];
    }

    registrarUsuario(value: any) {
        this.submitted = true;
        delete value.repitePassword;
        console.log(value);
        this.userService.addUser(value).subscribe(
          res => {
            console.log(res);
          },
          err => console.log(err)
        );
        this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
    }


    seleccionarTipoUsuario(){
      const snapshot: RouterStateSnapshot = this.router.routerState.snapshot;
      snapshot.root['_urlSegment'].children.primary.segments[0].path === 'proveedor' ? this.tipoUsuario = snapshot.root['_urlSegment'].children.primary.segments[0].path : 'Cliente';
    }

    get diagnostic() { return JSON.stringify(this.formUsuario.value); }

}

