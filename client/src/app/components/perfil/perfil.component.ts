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
        'user_name': new FormControl({value: this.perfilUser.user_name , disabled: this.disabled}),
        'user_surnames': new FormControl({value:  this.perfilUser.user_surnames , disabled: this.disabled}),
        'user_email': new FormControl({value:  this.perfilUser.user_email , disabled: this.disabled}, Validators.compose([Validators.minLength(6)])),
        'user_gender': new FormControl({value: this.perfilUser.user_gender , disabled: this.disabled}),
        'user_description': new FormControl({value: this.perfilUser.user_description , disabled: this.disabled}),
        'phone': new FormControl({value: this.perfilUser.phone , disabled: this.disabled}, Validators.required),
        'direction': new FormControl({value: this.perfilUser.direction , disabled: this.disabled}, Validators.required),
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

  actualizarPerfil(dates){
    console.log(dates);
     this.userService.updateUser(this.perfilUser.id_user , dates).subscribe(
      res => {
        this.messageService.add({severity:'success', summary: 'Actualizado correctamente', detail:'Actualizado correctamente'});
      },
      err => {
        this.messageService.add({severity:'error', summary: 'Error al actualizar', detail:'Validacion no valida'});
      }
    );
  }
}
