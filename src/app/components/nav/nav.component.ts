import { Component, inject } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
ordersService: OrdersService = inject(OrdersService);

shoppingCartCounter(){
  return this.ordersService?.currentOrder.length <= 9 ? this.ordersService.currentOrder.length : '+9';
}

  categories = [
    {
      label: 'All',
      path: ''
    },
    {
      label:'Clothes',
      path:'/1'
    },
    {
      label:'Electronics',
      path:'/2'
    },
    {
      label:'Furnitures',
      path:'/3'
    },
    {
      label:'Toys',
      path:'/4'
    },
    {
      label:'Others',
      path:'/5'
    }

  ];

}
