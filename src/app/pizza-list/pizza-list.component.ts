import { Component, OnInit } from '@angular/core';
import { Pizza } from './Pizza';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss'],

})
export class PizzaListComponent implements OnInit {

  pizzas: Pizza[] = [
    {
      name: 'Mozzzarella',
      desc: 'Jamon, Tomate y Queso',
      price: 500,
      available: 12,
      image : "assets/img/pizzas/mozzarella.jpg",
      promo: true,
      quantity: 0,
     },
    {
      name: 'Allioli',
      desc: 'Tomate, muzzarella, doble ajo y parmesano',
      price: 600,
      available: 0,
      image : "assets/img/pizzas/allioli.jpg",
      promo: false,
      quantity: 0,
    },
    {
      name: 'Calabresa',
      desc: 'Queso, tomate longaniza calabresa',
      price: 700,
      available: 10,
      image : "assets/img/pizzas/calabresa.jpg",
      promo: false,
      quantity: 0,
    },
];


  constructor() { }

  ngOnInit(): void {
  }

  maxLimit(msj: string){
     alert(msj)
      }
}
