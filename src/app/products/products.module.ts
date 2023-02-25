import { MaterialStylesModule } from './../material-styles/material-styles.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductDetailsComponent, ProductListComponent],
  imports: [CommonModule, MaterialStylesModule,FormsModule],
  exports: [ProductListComponent, ProductDetailsComponent],
})
export class ProductsModule {}
