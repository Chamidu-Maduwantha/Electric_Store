import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ItemPageComponent } from './components/pages/item-page/item-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { RegiterPageComponent } from './components/pages/regiter-page/regiter-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'items/:id', component:ItemPageComponent},
  {path: 'cart-page',component:CartPageComponent},
  {path: 'login',component:LoginPageComponent},
  {path: 'register',component:RegiterPageComponent},
  {path: 'checkout',component:CheckoutPageComponent},
  {path: 'payment',component:PaymentPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
