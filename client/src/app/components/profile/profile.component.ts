import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit {
  profileUser:any = [];
  profileUserForm: FormGroup
  disabled:boolean = true;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('idUser')).subscribe(
      res => {
        this.profileUser = res[0];
        this.profileUserForm = this.fb.group({
        'user_name': new FormControl({value: this.profileUser.user_name , disabled: this.disabled}),
        'user_surnames': new FormControl({value:  this.profileUser.user_surnames , disabled: this.disabled}),
        'user_email': new FormControl({value:  this.profileUser.user_email , disabled: this.disabled}, Validators.compose([Validators.minLength(6)])),
        'user_gender': new FormControl({value: this.profileUser.user_gender , disabled: this.disabled}),
        'user_description': new FormControl({value: this.profileUser.user_description , disabled: this.disabled}),
        'phone': new FormControl({value: this.profileUser.phone , disabled: this.disabled}, Validators.required),
        'direction': new FormControl({value: this.profileUser.direction , disabled: this.disabled}, Validators.required),
    });
      },
      err => console.log(err)
    );
  }

  editProfile(){
    this.disabled = !this.disabled;
    if (this.disabled) {
      this.profileUserForm.disable();
    }else {
      this.profileUserForm.enable();
    }
  }

  updateProfile(dates){
      if (!this.disabled) {
        this.userService.updateUser(this.profileUser.id_user , dates).subscribe(
      res => {
        this.messageService.add({severity:'success', summary: 'Actualizado correctamente', detail:'Actualizado correctamente'});
      },
      err => {
        this.messageService.add({severity:'error', summary: 'Error al actualizar', detail:'Validacion no valida'});
      }
    );
    this.editProfile()
      }

  }
}
