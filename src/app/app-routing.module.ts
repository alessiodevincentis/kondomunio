import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnagraficaAmministratoriComponent} from "./components/anagrafica-amministratori/anagrafica-amministratori.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {path: 'dashboard',component: DashboardComponent},
  {path: 'anagrafica-amministratori',component: AnagraficaAmministratoriComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
