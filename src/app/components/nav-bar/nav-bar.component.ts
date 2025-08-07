import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterLink} from "@angular/router"
import { Router } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, MatIconModule, MatBadgeModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  constructor(private router: Router, protected cartService: CartService){
}

  routes = [
    {
      path: "/",
      label: "Home"
    },
    {
      path: "/news",
      label: "News"
    },
    {
      path: "/contact",
      label: "Contact"
    },{
      path: "/about",
      label: "About"
    }
  ]
}
