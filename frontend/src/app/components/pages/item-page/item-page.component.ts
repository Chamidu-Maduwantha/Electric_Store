import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ItemsService } from 'src/app/services/items.service';
import { items } from 'src/app/shared/models/items';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  item!: items
  constructor(actvatedRoute:ActivatedRoute, itemservice:ItemsService , private cartService:CartService , private router:Router) {
    actvatedRoute.params.subscribe((params)=>{
      if(params.id)
      itemservice.getItemById(params.id).subscribe(serverItems => {
        this.item = serverItems;
      });
    })
   }

  ngOnInit(): void {
  }
 

  addToCart(){
    this.cartService.addToCart(this.item);
    this.router.navigateByUrl('/cart-page')
  }
}
