import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  public listOfData = [
    {
      key: '1',
      producto: 'producto 1',
      cliente: "Pedro Lopez",
      cantidad: 100,
      fecha: '18/07/2021'
    },
    {
      key: '2',
      producto: 'producto 2',
      cliente: "Maria Jose",
      cantidad: 200,
      fecha: '19/07/2021'
    },
    {
      key: '3',
      producto: 'producto 3',
      cliente: "Camilo Sesto",
      cantidad: 300,
      fecha: '20/07/2021'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
