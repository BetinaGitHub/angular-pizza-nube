import { Component, OnInit } from '@angular/core';
import { Pizza } from './Pizza';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[] = [
    {
      name: 'Mozzzarella',
      desc: 'Jamon, Tomate y Queso',
      price: 500,
      available: true,
      image : "assets/img/pizzas/mozzarella.jpg",
      promo: false,
     },
    {
      name: 'Allioli',
      desc: 'Tomate, muzzarella, doble ajo y parmesano',
      price: 600,
      available: false,
      image : "assets/img/pizzas/allioli.jpg",
      promo: true,
    },
    {
      name: 'Calabresa',
      desc: 'Queso, tomate longaniza calabresa',
      price: 700,
      available: true,
      image : "assets/img/pizzas/calabresa.jpg",
      promo: false,
    },
]


  constructor() { }

  ngOnInit(): void {
  }

}
