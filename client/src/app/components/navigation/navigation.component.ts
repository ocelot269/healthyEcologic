import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user = null;
  constructor(private loginService: LoginService,
              private userService: UserService) { }

  ngOnInit() {
    this.user = this.getUser(this.loginService.getIdUser());
    this.isLogged();
  }

  isLogged(){
    return this.loginService.isLogged();
  }

  userType(){
    return this.user.user_type;
  }


  getUser(id: string){
    return this.userService.getUser(id).subscribe(
      res => {
        this.user = res[0];
        console.log(this.user);
      },
      err => console.log(err)
    );
  }
}
