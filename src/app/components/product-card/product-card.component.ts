import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  constructor(private cartService: CartService) { }

  @Input() item:any

  addToCart(item: any, quantity: number = 1) {
    // spread syntax
    const product = {
      ...item,
      quantity: quantity
    }
    this.cartService.addToCart(product)
  }
}
