import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeroComponent } from './components/primero/primero.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { TerceroComponent } from './components/tercero/tercero.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    //Pantalla generica. Index
    path: "", redirectTo: "primero", pathMatch: 'full'
  },
  {
    path: 'primero', 
    component: PrimeroComponent
  },
  {
    path: 'segundo', 
    component: SegundoComponent,
    children:[
      {
        path: 'tercero', 
        component: TerceroComponent
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
