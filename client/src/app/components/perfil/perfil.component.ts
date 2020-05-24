import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [MessageService]
})
export class PerfilComponent implements OnInit {
  perfilUser:any = [];
  userPerfilForm: FormGroup
  disabled:boolean = true;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('idUser')).subscribe(
      res => {
        this.perfilUser = res[0];
        console.log(res[0]);
            this.userPerfilForm = this.fb.group({
        'user_name': new FormControl({value: this.perfilUser.user_name , disabled: this.disabled}, Validators.required),
        'user_surnames': new FormControl({value:  this.perfilUser.user_surnames , disabled: this.disabled}, Validators.required),
        'user_email': new FormControl({value:  this.perfilUser.user_email , disabled: this.disabled}, Validators.compose([Validators.required, Validators.minLength(6)])),
        'user_gender': new FormControl({value: this.perfilUser.user_gender , disabled: this.disabled}, Validators.required),
        'user_description': new FormControl({value: this.perfilUser.user_description , disabled: this.disabled} , Validators.required)
    });
      },
      err => console.log(err)
    );
  }

  editarPerfil(){
    this.disabled = !this.disabled;
    if (this.disabled) {
      this.userPerfilForm.disable();
    }else {
      this.userPerfilForm.enable();
    }

  }

}
