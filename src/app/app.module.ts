import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import { AnagraficaAmministratoriComponent } from './components/anagrafica-amministratori/anagrafica-amministratori.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnagraficaAmministratoriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
