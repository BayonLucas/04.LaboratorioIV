import { Component } from '@angular/core';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { ErrorComponent } from '../error/error.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public user: string = "";
  public pass: string = "";
  public result!: boolean;

  public verificar_usuario(){
    if(this.user == "Lucas" && this.pass == "Luba"){
      this.result = true;
    }
    else{
      this.result = false;
    }
  }

}
