import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagrafica-amministratori',
  templateUrl: './anagrafica-amministratori.component.html',
  styleUrls: ['./anagrafica-amministratori.component.css']
})
export class AnagraficaAmministratoriComponent implements OnInit {
  amministratori: any = [];

  constructor() { }

  ngOnInit(): void {
    this.amministratori = [
      {cognome: 'De Vincentis', nome: 'Alessio', dataNascita: '13/06/1995', ragioneSociale: 'De Vincentis Amministrazioni S.R.L.'},
      {cognome: 'De Vincentis', nome: 'Alessio', dataNascita: '13/06/1995', ragioneSociale: 'De Vincentis Amministrazioni S.R.L.'},
      {cognome: 'De Vincentis', nome: 'Alessio', dataNascita: '13/06/1995', ragioneSociale: 'De Vincentis Amministrazioni S.R.L.'},
      {cognome: 'De Vincentis', nome: 'Alessio', dataNascita: '13/06/1995', ragioneSociale: 'De Vincentis Amministrazioni S.R.L.'},
      {cognome: 'De Vincentis', nome: 'Alessio', dataNascita: '13/06/1995', ragioneSociale: 'De Vincentis Amministrazioni S.R.L.'},
      {cognome: 'De Vincentis', nome: 'Alessio', dataNascita: '13/06/1995', ragioneSociale: 'De Vincentis Amministrazioni S.R.L.'},
      {cognome: 'De Vincentis', nome: 'Alessio', dataNascita: '13/06/1995', ragioneSociale: 'De Vincentis Amministrazioni S.R.L.'},
      {cognome: 'De Vincentis', nome: 'Alessio', dataNascita: '13/06/1995', ragioneSociale: 'De Vincentis Amministrazioni S.R.L.'},
      {cognome: 'De Vincentis', nome: 'Alessio', dataNascita: '13/06/1995', ragioneSociale: 'De Vincentis Amministrazioni S.R.L.'},
      {cognome: 'De Vincentis', nome: 'Alessio', dataNascita: '13/06/1995', ragioneSociale: 'De Vincentis Amministrazioni S.R.L.'},
      {cognome: 'De Vincentis', nome: 'Alessio', dataNascita: '13/06/1995', ragioneSociale: 'De Vincentis Amministrazioni S.R.L.'},
      {cognome: 'De Vincentis', nome: 'Alessio', dataNascita: '13/06/1995', ragioneSociale: 'De Vincentis Amministrazioni S.R.L.'},
      {cognome: 'De Vincentis', nome: 'Alessio', dataNascita: '13/06/1995', ragioneSociale: 'De Vincentis Amministrazioni S.R.L.'},
    ]
  }

}
