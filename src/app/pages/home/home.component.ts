import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model'
import { ProductsService} from '../../services/products.service'
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { OrderProductsListComponent } from 'src/app/components/order-products-list/order-products-list.component';
import { OrdersService } from 'src/app/services/orders.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone:true,
  imports:[
    CommonModule,
    ProductCardComponent,
    OrderProductsListComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productsList:Product[] =[];
  productService:ProductsService = inject(ProductsService);
  orderService:OrdersService = inject(OrdersService);
  route:ActivatedRoute = inject(ActivatedRoute);

  constructor(){
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getProductList(Number(params['category']));
    })
  }

  getProductList(categoryId:number){
    if(categoryId){
      this.productService.getProductsByCategory(categoryId).then((productsList:
        Product[])=>{
          this.productsList = productsList;
        })
    }else{
      this.productService.getProducts().then((productsList:
        Product[])=>{
          this.productsList = productsList;
        })
    }
  }

}
