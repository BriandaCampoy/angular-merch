import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'https://api.escuelajs.co/api/v1'

  async getProducts():Promise<Product[]>{
    const data = await fetch(`${this.url}/products`)
    return await data.json();
  }

  async getProductsByCategory(category:number):Promise<Product[]>{
    const data = await fetch(`${this.url}/products/?categoryId=${category}`)
    return await data.json();
  }

  async getProductById(id:number):Promise<Product>{
    const data = await fetch(`${this.url}/products/${id}`)
    return await data.json();
  }

  constructor() { }
}
