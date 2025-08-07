import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { RouterOutlet } from '@angular/router'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductCardComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

