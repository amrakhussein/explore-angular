import { Component, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/model/interfaces';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailsComponent {
  public selectedProduct$: Observable<Product | undefined>;
  private behaviorSubjectProduct = new BehaviorSubject<Product | undefined>(undefined);

  
  @Input() product: any;
  constructor(private productService: ProductService) {
    this.selectedProduct$ = this.behaviorSubjectProduct.asObservable();
    // this.selectedProduct$ = new Observable<Product>();
  }
  private _showSingleProduct: Product | undefined;
  
  get showSingleProduct$(): Product | undefined {
    return this._showSingleProduct;
  }
  
  getProductById(id: number) {
    const product:any = this.productService?.getProductById(id)
    this.behaviorSubjectProduct.next(product);
    console.log(' selectedProduct$: ',  this.selectedProduct$);
    // this.selectedProduct$ = this.productService?.getProductById(id);
    // this.selectedProduct$?.subscribe((product) => {
    //   console.log('product: ', product);
      // this.selectedProduct$ = product;

    // });
  }
}
