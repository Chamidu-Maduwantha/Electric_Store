import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { items } from '../shared/models/items';
import { CartItem } from '../shared/models/cartitems';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject:BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { } 

  addToCart(ites:items):void{
    let cartItems =  this.cart.ite.find(ite => ite.item.id == ites.id);
    if(cartItems)
     return;
    
    this.cart.ite.push(new CartItem (ites));
    this.setCartToLocalStorage();
  }


  removeFromCart(itemId:string):void{
    this.cart.ite = this.cart.ite.filter(ites => ites.item.id != itemId);
    this.setCartToLocalStorage();
  }


  changeQuantity(itemId:string, quantity:number){
    let CartItem = this.cart.ite.find(ite => ite.item.id == itemId);
    if(!CartItem) return;

    CartItem.quantity = quantity;
    CartItem.price = quantity * CartItem.item.price;
    this.setCartToLocalStorage();
  }


  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }
  
  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.ite.reduce((prevSum,currentItem)=> prevSum+currentItem.price,0);
    this.cart.totalCount = this.cart.ite.reduce((prevSum,currentItem)=> prevSum+currentItem.quantity,0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart);
  }


  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }

}
