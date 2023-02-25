import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Product 1',
      quantity: 3,
      price: 100,
      img: 'assets/p1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 5,
      price: 24,
      img: 'assets/p2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 5,
      price: 53,
      img: 'assets/p2.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      quantity: 5,
      price: 32,
      img: 'assets/p2.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      quantity: 5,
      price: 66,
      img: 'assets/p2.jpg',
    },
  ];

  getAllProducts() {
    return this.products;
  }

  // public _showSingleProduct: any;

  getProductById(prdId?: number): Observable<Product> | undefined {
    const product = this.products.find((p) => p.id === prdId);
    return product ? of(product) : undefined;
  }

  // this._showSingleProduct = product;
  // // return the product if not null
}
