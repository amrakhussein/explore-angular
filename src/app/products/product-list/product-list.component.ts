import { ProductDetailsComponent } from '../product-detail/product-detail.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Category, DiscountOffers, Product } from 'src/app/model/interfaces';
import { ProductService } from './../product.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public discount: DiscountOffers;
  public noDiscount: DiscountOffers;
  public storeName: string;
  public logo: string;

  // public products: Product[];
  public categoryList: Category[];

  public clientName: string;
  public isPurchased: boolean;

  
  
  constructor(private productService: ProductService) {
    // this.products = this.productService.getAllProducts()

    this.discount = DiscountOffers.FifteenPercent;
    this.noDiscount = DiscountOffers.NoDiscount;
    this.storeName = 'some store';
    this.logo = 'assets/logo.jpg';
    // TODO: refactor
    this.categoryList = [
      { id: 1, name: 'Accessories' },
      { id: 2, name: 'Technology' },
    ];

    this.clientName = 'Amr';
    this.isPurchased = false;
  }
  // render UI
  // * return data from services to UI
  renderProducts(): Product[] {
    return this.productService.getAllProducts();
  }

  // todo: refactor to services
  buy() {
    this.isPurchased = !this.isPurchased;
  }

  ngOnInit(): void {}

  showData = false;
  @ViewChild(ProductDetailsComponent) productDetail?: Product;


  viewProduct() {
    this.showData = !this.showData;
    this.renderProducts()
  }

  //
  private _showSpinner = new BehaviorSubject<boolean>(true);

  get showSpinner$() {
    return this._showSpinner.asObservable();
  }
  stopSpinner(){
    this._showSpinner.next(false)
  }
}
