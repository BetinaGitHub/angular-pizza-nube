import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  pizza = {
    "name": "mozzzarella",
    "desc": "Jamon, Tomate y Queso",
    "price": 600,
    "image" : "assets/img/pizzas/mozzarella.jpg"
  }


  constructor() { }

  ngOnInit(): void {
  }

}
