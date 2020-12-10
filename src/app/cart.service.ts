import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from './pizza-list/Pizza';

//Maneja la logica del carrito
@Injectable({
  providedIn: 'root'
})

export class CartService {

  private _cartList: Pizza[] = [];

  cartList: BehaviorSubject<Pizza[]> = new BehaviorSubject([]);

  constructor() {}

  addToCart(pizza: Pizza) {
     let item: Pizza = this._cartList.find((v1) => v1.name == pizza.name);
     if (!item) {
       this._cartList.push({ ... pizza});
    }else{
       item.quantity += pizza.quantity;
     }
     this.cartList.next(this._cartList);
  }
}

