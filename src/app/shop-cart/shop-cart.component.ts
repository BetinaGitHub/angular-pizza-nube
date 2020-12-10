import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza-list/Pizza';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})

export class ShopCartComponent implements OnInit {

  cartList$: Observable<Pizza[]>;

  constructor(private cart: CartService) {
      this.cartList$ = cart.cartList.asObservable();
    }

  ngOnInit(): void {
  }

}
