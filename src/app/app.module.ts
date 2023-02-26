import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialStylesModule } from './material-styles/material-styles.module';
import { NotificationService } from './notification.service';

import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { ContainerComponent } from './container/container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotificationAreaComponent } from './notification-area/notification-area.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsModule } from './products/products.module';
import { TheFooterComponent } from './the-footer/the-footer.component';
import { TheHeaderComponent } from './the-header/the-header.component';
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    TheHeaderComponent,
    NotificationAreaComponent,
    ContainerComponent,
    TheFooterComponent,
    AppNavComponent,
    NotFoundComponent,
    PostsComponent,
    UsersComponent,
    CommentsComponent,
    ProductsWithDiscountComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialStylesModule,
    AppRoutingModule,
    ProductsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
