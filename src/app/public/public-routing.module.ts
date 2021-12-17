import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePage} from './home/home.page';
import {CardDishesPage} from './card-dishes/card-dishes.page';
import {CartPage} from './cart/cart.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'card-dishes',
    component: CardDishesPage
  },
  {
    path: 'cart',
    component: CartPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
