import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { ProductCardComponent } from "../../components/product-card/product-card.component"
@Component({
  selector: 'app-home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private productService: ProductService){
    this.products = this.productService.products
  }

  products: any[] = [];

}
