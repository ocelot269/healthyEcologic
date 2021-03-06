import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { SharedService } from '../../services/shared.service';

import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, RouterStateSnapshot  } from '@angular/router';


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
              @Inject(DOCUMENT) private document: Document,
              private sharedService: SharedService,
              private router: Router
) { }

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

  Logout(){
    localStorage.clear();
  }

  findProduct(event){
    this.sharedService.emitChange(event);
  }

  isProducts(){
    const snapshot: RouterStateSnapshot = this.router.routerState.snapshot;
    if (snapshot.root['_urlSegment'].children.primary) {
       return snapshot.root['_urlSegment'].children.primary.segments[0].path === 'productos' ? true : false;
    }

  }


}
