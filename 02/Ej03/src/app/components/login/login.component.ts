import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router){}


  private mail: string = "";
  private pass: string = "";


  public Validar() {
    if(this.mail == "asd@asd" && this.pass == "1234"){
      this.router.navigateByUrl("Bienvenido")
    }
    else{
      this.router.navigateByUrl("a")
    }

  }


  
}
