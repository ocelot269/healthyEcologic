import { Component, OnInit,Input } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {UserService} from "../../services/user.service";
import { Router, RouterStateSnapshot  } from '@angular/router';


@Component({
  selector: 'app-healthy-form',
  templateUrl: './healthy-form.component.html',
  styleUrls: ['./healthy-form.component.css'],
  providers: [MessageService]
})
export class HealthyFormComponent implements OnInit {

    formUser: FormGroup;

    gender: SelectItem[];

    userType: string = 'Cliente';
    constructor(private fb: FormBuilder, private messageService: MessageService,
    private userService : UserService,
    private router: Router) {}

    ngOnInit() {

        this.selectTypeUser();

        this.formUser = this.fb.group({
            'user_name': new FormControl('', Validators.required),
            'user_type': new FormControl(this.userType),
            'user_surnames': new FormControl('', Validators.required),
            'user_email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
            'user_description': new FormControl(''),
            'user_gender': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(9)])),
            'repeatPassword': new FormControl('', Validators.compose([Validators.required, Validators.minLength(9)])),
            'phone': new FormControl('', Validators.required),
            'direction': new FormControl('', Validators.required),

        });

        this.gender = [
          {label:'Selecciona género', value:''},
          {label:'Hombre', value:'Hombre'},
          {label:'Mujer', value:'Mujer'}
        ];
    }

    registerUser(value: any) {
        delete value.repeatPassword;
        this.userService.addUser(value).subscribe(
          res => {
            this.messageService.add({severity:'info', summary:'Registrado correctamente', detail:'Formulario enviado'});
          },
          err => console.log(err)
        );
    }


    selectTypeUser(){
      const snapshot: RouterStateSnapshot = this.router.routerState.snapshot;
      snapshot.root['_urlSegment'].children.primary.segments[0].path === 'proveedor' ? this.userType = snapshot.root['_urlSegment'].children.primary.segments[0].path : 'Cliente';
    }

    get diagnostic() { return JSON.stringify(this.formUser.value); }

}

