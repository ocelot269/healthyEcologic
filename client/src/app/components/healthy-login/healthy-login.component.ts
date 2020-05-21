
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import { Router } from '@angular/router'
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-healthy-login',
  templateUrl: './healthy-login.component.html',
  styleUrls: ['./healthy-login.component.css']
})
export class HealthyLoginComponent implements OnInit {

  formUsuario: FormGroup;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private loginService: LoginService) { }
  ngOnInit(): void {

        this.formUsuario = this.fb.group({
          'user_name': new FormControl('', Validators.required),
          'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(9)])),
  });
  }

  validarUsuario(value: any) {
      this.userService.validationUser(value).subscribe(
        res => {
          this.loginService.setIdUser(res[0].id_user);
          this.loginService.setLogged(true);
          this.router.navigateByUrl('/', { state: { hello: 'world' } });
        },
        err => console.log(err)
      );
  }



}
