import { AlertService } from './../../resources/services/alert.service';
import { Component, OnInit } from '@angular/core';
import {RequestLogin} from '../../resources/models/RequestLogin'
import { LoginService } from '../../resources/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin;

  constructor(private loginService: LoginService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin() :void{
    //Subscribe - subscreve no observable para obter o resultado
    this.loginService.doLogin(this.requestLogin).subscribe((data) => {
      this.alertService.info("Funcionalidade ainda não implementada.");
    },
    (httpError) => {
      this.alertService.error(httpError.error.message);
      console.log(httpError);
    })
  }

}
