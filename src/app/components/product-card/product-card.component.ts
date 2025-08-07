import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() item:any

  @Output() itemEvent = new EventEmitter();

  addToCart(itemName: string){
    console.log('Sản phẩm được click tại component con:', itemName);
    this.itemEvent.emit(itemName)
  }
}
