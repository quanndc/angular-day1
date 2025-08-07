import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() {
    if(!localStorage.getItem('cart')) {
      this.gioHang = [];
      this.totalPrice = 0;
      localStorage.setItem('cart', JSON.stringify(this.gioHang));
      localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
    } else {
      this.gioHang = JSON.parse(localStorage.getItem('cart')!);
      this.totalPrice = JSON.parse(localStorage.getItem('totalPrice')!);
    }
  }

  gioHang: any = [];
  totalPrice: number = 0;

  addToCart(product: any) {
    if(this.gioHang.length === 0) {
      this.gioHang.push(product);
      this.totalPrice += product.price * product.quantity;
      localStorage.setItem('cart', JSON.stringify(this.gioHang));
      localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
      return;
    }
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const index = this.gioHang.findIndex((item:any) => item.id == product.id); 
    if(index == -1){
      this.gioHang.push(product);
      this.totalPrice += product.price * product.quantity;
      localStorage.setItem('cart', JSON.stringify(this.gioHang));
      localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
      return;
    }
    this.gioHang[index].quantity += product.quantity;
    this.totalPrice += product.price * product.quantity;
    localStorage.setItem('cart', JSON.stringify(this.gioHang));
    localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
    return;
  }

  removeFromCart(id: number) {
    this.gioHang = this.gioHang.filter((item:any) => item.id != id)
    this.totalPrice = this.gioHang.reduce((total: number, item: any) => total + (item.price * item.quantity), 0);
    localStorage.setItem('cart', JSON.stringify(this.gioHang));
    localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
  }
}
