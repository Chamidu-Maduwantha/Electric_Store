import {items} from "./items"

export class CartItem{
    constructor(public item:items){}
    quantity:number = 1;
    price:number = this.item.price;
}