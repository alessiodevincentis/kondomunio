import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import { AnagraficaAmministratoriComponent } from './components/anagrafica-amministratori/anagrafica-amministratori.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnagraficaAmministratoriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
