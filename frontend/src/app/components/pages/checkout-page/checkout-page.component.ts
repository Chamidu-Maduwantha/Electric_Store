import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  order:Order = new Order
  checkoutForm!:FormGroup;
  constructor(cartService:CartService,
    private formBuilder:FormBuilder,
    private userService:UserService,
    private toastrService:ToastrService,
    private orderService:OrderService,
    private router:Router) {
      const cart = cartService.getCart();
      this.order.items = cart.ite;
      this.order.totalPrice = cart.totalPrice;
     }

  ngOnInit(): void {
    let{name,address}= this.userService.currentUser;
    this.checkoutForm =this.formBuilder.group({
      name:[name,Validators.required],
      address:[address,Validators.required]
    })
  }
  get fc(){
    return this.checkoutForm.controls;
  }

  createOder(){
    if(this.checkoutForm.invalid){
      this.toastrService.warning('please fill the inputs','Invalid Inputs');
      return;
    }
    this.order.name = this.fc.naem.value;
    this.order.address = this.fc.address.value;

    this.orderService.create(this.order).subscribe({
      next:() => {
        this.router.navigateByUrl('/payment');
      },
      error:(errorResponse) => {
        this.toastrService.error(errorResponse.error, 'Cart');
      }
    })
  }
  

}
