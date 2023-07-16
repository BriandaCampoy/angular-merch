import { Injectable } from '@angular/core';
import { OrderProduct } from '../models/order-product.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orderModal = false;
  orders:OrderProduct[][] = [];
  currentOrder:OrderProduct[]=[];

  constructor() { }

  getOrderModal(): boolean {
    return this.orderModal;
  }

  orderModalToggle(){
    this.orderModal = !this.orderModal;
  }

  getOrder():OrderProduct[] {
    return this.currentOrder;
  }
  getAllOrders():OrderProduct[][] {
    return this.orders;
  }
  addProduct(product:Product){
      this.currentOrder.push({
        product: product,
        quantity:1
      });
  }
  removeProduct(index:number){
    this.currentOrder.splice(index, 1);
  }
  isAdded(product:Product):boolean{
    const productAdded = this.currentOrder.find(prd => prd.product.id === product.id)
    return productAdded!=undefined;
  }

  addOrder(){
    this.orders.push([...this.currentOrder]);
    this.currentOrder = [];
  }
}
