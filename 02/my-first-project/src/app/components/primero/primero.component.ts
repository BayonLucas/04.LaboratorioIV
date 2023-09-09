import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent {

  constructor(private router: Router){}

  public navClick(){
    this.router.navigateByUrl("segundo");
  }


}
