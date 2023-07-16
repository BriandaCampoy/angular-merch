import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CheckoutComponent} from './pages/checkout/checkout.component';
import { OrdersComponent } from "./pages/orders/orders.component";
const routeConfig:Routes = [
  {
    path:'',
    component:HomeComponent,
    title:'Home page'
  },
  {
    path:':category',
    component:HomeComponent,
    title:'Home page'
  },
  {
    path:'checkout',
    component:CheckoutComponent,
    title:'Checkout'
  },
  {
    path:'orders',
    component:OrdersComponent,
    title:'Orders'
  }
];

export default routeConfig;
