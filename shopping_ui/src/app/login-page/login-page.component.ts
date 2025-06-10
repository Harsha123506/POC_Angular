import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private httpClient: HttpServiceService){

  }
    login(){
      this.httpClient.httpPost({}).subscribe(
        (resp :any) =>{
          if(resp){
          localStorage.setItem("jwtToken",resp.data);
          }
        }
      );
    }
}
