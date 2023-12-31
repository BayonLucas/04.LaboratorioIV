import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';



const routes: Routes = [
  {
    path: "",
    redirectTo:"login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "Bienvenido",
    component: BienvenidoComponent
  },
  {
    path:"**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
