import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialStylesModule } from './material-styles/material-styles.module';
import { NotificationService } from './notification.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { TheHeaderComponent } from './the-header/the-header.component';
import { NotificationAreaComponent } from './notification-area/notification-area.component';
@NgModule({
  declarations: [AppComponent, TheHeaderComponent, NotificationAreaComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialStylesModule,
    ProductsModule,
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
