import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  public listOfData = [
    {
      key: '1',
      nombre: 'John Brown',
      tel: 22032335,
      nit: '0614-290209-000-0'
    },
    {
      key: '2',
      nombre: 'Jim Green',
      tel: 22055831,
      nit: '0614-290209-000-1'
    },
    {
      key: '3',
      nombre: 'Joe Black',
      tel: 77854136,
      nit: '0614-290209-000-2'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
