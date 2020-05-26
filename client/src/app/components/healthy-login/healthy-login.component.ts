
import { Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService} from "../../services/user.service";
import { Router } from '@angular/router'
import { LoginService } from '../../services/login.service';
import { NavigationComponent } from '../navigation/navigation.component';

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
              private loginService: LoginService,
              private navigationComponent:NavigationComponent) { }
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
          this.loginService.setIdUser(res[0].id_user);
          this.loginService.setLogged(true);
          localStorage.setItem('user_type', res[0].user_type);
          localStorage.setItem('user_name', res[0].user_name);
          this.router.navigate(['/perfil']);
        },
        err => console.log(err)
      );
  }



}
