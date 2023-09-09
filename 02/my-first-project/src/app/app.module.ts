import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ComponentsComponent } from './components/components.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { PrimeroComponent } from './components/primero/primero.component';
import { TerceroComponent } from './components/tercero/tercero.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // ComponentsComponent,
    SegundoComponent,
    PrimeroComponent,
    TerceroComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
