import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private idUser:any;
  private logged:boolean;

  constructor() { }

    setIdUser(data:any) {
        this.idUser = data;
        localStorage.setItem('idUser', data);
    }

    getIdUser() {
      return this.idUser ? this.idUser : localStorage.getItem('idUser');
    }

    isLogged() {
      return this.logged = this.idUser > 0 ? true : false;
    }

}

