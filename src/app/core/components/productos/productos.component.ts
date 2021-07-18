import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public listOfData = [
    {
      key: '1',
      nombre: 'Producto 1',
      descripcionP: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      precio: 100
    },
    {
      key: '2',
      nombre: 'Producto 2',
      descripcionP: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      precio: 200
    },
    {
      key: '3',
      nombre: 'Producto 3',
      descripcionP: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      precio: 300
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
