import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spotify';
  nombre: string = 'Raphael'
  edad: number = 22
  telefono: null = null
  direccion: undefined = undefined
  otros: any;
  car: CarModel = {
    marca: 'Ford',
    modelo: 'Focus',
    ano: 2022
  }
  listaCar: Array<CarModel> = [
    {
      marca: 'Nissan',
      modelo: 'Salon',
      ano: 2020
    },
    {
      marca: 'Toyota',
      modelo: 'Silver 2000',
      ano: 2021
    }
  ]
}

interface CarModel{
  marca: string;
  modelo: string;
  ano: number;
}