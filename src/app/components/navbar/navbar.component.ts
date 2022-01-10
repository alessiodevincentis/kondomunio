import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Dashboard',
        icon:'pi pi-fw pi-home',
        routerLink: '/dashboard'
      },
      {
        label:'Anagrafica',
        icon:'pi pi-fw pi-users',
        items:[
          {
            label:'Amministratori',
            routerLink: '/anagrafica-amministratori'
          },
          {
            label:'Condomìni'

          },
          {
            label:'Fornitori'
          }
        ]
      },
      {
        label:'Pagamenti',
        icon:'pi pi-fw pi-calendar',
        items:[
          {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
              {
                label:'Save',
                icon:'pi pi-fw pi-calendar-plus'
              },
              {
                label:'Delete',
                icon:'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label:'Archieve',
            icon:'pi pi-fw pi-calendar-times',
            items:[
              {
                label:'Remove',
                icon:'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label:'Preventivo e Consuntivo',
        icon:'pi pi-fw pi-list',
        items:[
          {
            label:'Remove',
            icon:'pi pi-fw pi-calendar-minus'
          }
        ]
      },
      {
        label:'Reportistica',
        icon:'pi pi-fw pi-print',
        items:[
          {
            label:'Remove',
            icon:'pi pi-fw pi-calendar-minus'
          }
        ]
      }
    ];
  }

}
