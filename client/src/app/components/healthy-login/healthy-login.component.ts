
import { Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService} from "../../services/user.service";
import { Router } from '@angular/router'
import { LoginService } from '../../services/login.service';
import { NavigationComponent } from '../navigation/navigation.component';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-healthy-login',
  templateUrl: './healthy-login.component.html',
  styleUrls: ['./healthy-login.component.css'],
  providers: [MessageService]
})
export class HealthyLoginComponent implements OnInit {

  formUsuario: FormGroup;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private loginService: LoginService,
              private navigationComponent:NavigationComponent,
              private messageService: MessageService) { }
  ngOnInit(): void {
        this.formUsuario = this.fb.group({
          'user_name': new FormControl('', Validators.required),
          'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(9)])),
  });
  }

  validarUsuario(value: any) {
      this.userService.validationUser(value).subscribe(
        res => {
          console.log(res);
          console.log(!res['message'].includes("no existe"));
          if (res['message'].includes("usuario logeado")) {
            console.log(res);
            this.loginService.setIdUser(res['resultado']['id_user']);
            this.loginService.setLogged(true);
            localStorage.setItem('user_type', res['resultado']['user_type']);
            localStorage.setItem('user_name', res['resultado']['user_name']);
            this.router.navigate(['/']);
          }else if (res['message'].includes("no existe")){
              this.messageService.add({severity:'error', summary: 'Usuario no existe', detail:'Fallo al iniciar el usuario no existe'});
          }else if (res['message'].includes("contraseña incorrecta")){
              this.messageService.add({severity:'error', summary: 'Contraseña incorrecta', detail:'La contraseña no es correcta'});
          }

        },
        err => {
          console.log(err);
        }
      );
  }



}
