import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import routesConfig from './routes'

const routes: Routes = routesConfig;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
