import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
  //Los atributos son publicos por defecto
  // public name: string = 'angular'; //Atributo
  // public btnLabel = 'Click me'
  // public apellido: string = "";

  public edad_uno: any = "";
  public edad_dos: any = "";
  public promedio: any = "";
  public suma: any = "";


  public onClick(event?: any): void{
    this.suma = parseInt(this.edad_dos) + parseInt(this.edad_uno);
    this.promedio = this.suma / 2;
  }



  // public onClick(event?: any): void{
  //   console.log(event);
  //   this.name = Math.random()?.toString();//'Clicked';
  //   console.log(this.apellido);

  // }


  /*Existen 4 tipos de bindeo (comunicacion entre la vista y el controlador)
    {{}} - Interpolacion <tag>{{atributo}}<tag/>
    [] - Property Binding
    () - Event Binding
    ([]) - Two Way Binding
  */

}
