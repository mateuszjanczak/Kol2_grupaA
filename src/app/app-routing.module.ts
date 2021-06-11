import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersMJComponent} from "./orders-mj/orders-mj.component";
import {OrdersDetailsMJComponent} from "./orders-details-mj/orders-details-mj.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersMJComponent
  },
  {
    path: 'orders',
    component: OrdersMJComponent
  },
  {
    path: 'orders/:id',
    component: OrdersDetailsMJComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
