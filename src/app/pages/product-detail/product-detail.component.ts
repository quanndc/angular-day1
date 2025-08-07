import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  id: string = "";
  // service

  constructor(private activatedRoute: ActivatedRoute){
    const { id } = this.activatedRoute.snapshot.params
    this.id = id;
  }


}
