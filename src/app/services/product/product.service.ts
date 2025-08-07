import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  products = [
    {
      id: 1,
      name: "Gà rán Jolibee - Combo lan toả yêu thương",
      description: "Chắc là không giòn đâu, gồm 3 miếng gà giòn",
      price: 129000,
      imageUrl: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/g/_/g_gi_n_vui_v_-_6_7_2.png",
      discount: 0.3
    },
    {
      id: 2,
      name: "Gà rán Jolibee - Combo lan toả mùi hương",
      description: "Chắc là không thơm đâu, gồm 4 miếng gà",
      imageUrl: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/g/_/g_gi_n_vui_v_-_1_1.png",
      price: 139000,
      discount: 0.5
    },
    {
      id: 3,
      name: "Gà rán Jolibee - Combo siêu tiết kiệm",
      description: "Chắc là không đắt đâu, gồm 2 miếng gà rút xương (rất bé)",
      imageUrl: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/g/_/g_gi_n_vui_v_-_9.png",
      price: 89000,
      discount: 0
    },
  ]
}
