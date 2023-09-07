import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ComponentsprimeroComponent } from './componentsprimero/componentsprimero.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { PrimeroComponent } from './components/primero/primero.component';
import { TerceroComponent } from './components/tercero/tercero.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ComponentsprimeroComponent,
    SegundoComponent,
    PrimeroComponent,
    TerceroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
