import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private idUser:any;
  private logged:boolean = false;

  constructor() { }

    setIdUser(data:any) {
        this.idUser = data;
        localStorage.setItem('idUser', data);
    }

    getIdUser() {
      return this.idUser ? this.idUser : localStorage.getItem('idUser');
    }

    setLogged(data: any){
      this.logged = data;
      localStorage.setItem('logeado', data);
    }

    isLogged() {
      return <any> localStorage.getItem('logeado');
    }
}

