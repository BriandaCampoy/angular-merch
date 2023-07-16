import { Component, Input, inject } from '@angular/core';
import { OrderProduct } from 'src/app/models/order-product.model';
import { OrdersService } from 'src/app/services/orders.service';


@Component({
  standalone:true,
  selector: 'app-product-listed',
  templateUrl: './product-listed.component.html',
  styleUrls: ['./product-listed.component.css']
})
export class ProductListedComponent {
  @Input() orderproduct!: OrderProduct;
  @Input() OrderIndex!: number;
  orderService: OrdersService = inject(OrdersService);

  addOneProduct(){
    this.orderproduct.quantity++;
  }
  removeOneProduct(){
    if(this.orderproduct.quantity===1){
      this.orderService.removeProduct(this.OrderIndex)
    }else{
      this.orderproduct.quantity--;
    }
  }
  constructor(){

  }

}
