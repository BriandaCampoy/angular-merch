import { Component, Input, inject } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { OrdersService } from '../../services/orders.service'
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone:true,
  imports:[NgClass],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  orderService: OrdersService = inject(OrdersService);
  @Input() product!:Product;
  addProduct(){
    if(!this.orderService.isAdded(this.product)){
      this.orderService.addProduct(this.product)
    }
  }
}
