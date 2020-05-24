import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user = null;
  typeUser = null;
  constructor(private loginService: LoginService,
              private userService: UserService,
              @Inject(DOCUMENT) private document: Document,) { }

  ngOnInit() {
    this.user = this.getUser(this.loginService.getIdUser());
  }

  isLogged(){
    return this.loginService.isLogged();
  }

  getUserType(){
    if (localStorage.getItem('user_type')) {
      return localStorage.getItem('user_type');
    }
    return false;
  }

  getNameUser(){
    if (localStorage.getItem('user_name')) {
      return localStorage.getItem('user_name');
    }
  }

  getUser(id: string){
    return this.userService.getUser(id).subscribe(
      res => {
        this.user = res[0];
        this.typeUser = res[0].user_type;
      },
      err => console.log(err)
    );
  }

}
