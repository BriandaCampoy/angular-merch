import { Component, inject } from '@angular/core';
import { OrderProduct } from 'src/app/models/order-product.model';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductListedComponent } from '../product-listed/product-listed.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-products-list',
  standalone:true,
  imports:[ProductListedComponent, CommonModule],
  templateUrl: './order-products-list.component.html',
  styleUrls: ['./order-products-list.component.css']
})
export class OrderProductsListComponent {
  orderProducts: OrderProduct[] = [];
  ordersServices:OrdersService = inject(OrdersService)
  isOpen=false;

  ngAfterViewInit() {
    setTimeout(()=>{
      this.isOpen=true;
    },0)
  }

  constructor(){
    this.orderProducts = this.ordersServices.getOrder();
  }
}
