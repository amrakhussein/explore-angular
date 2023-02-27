import { SingleCommentComponent } from './single-comment/single-comment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { CommentsComponent } from './comments/comments.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    children: [
      { path: 'discounted', component: ProductsWithDiscountComponent },
    ],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id/comments', component: CommentsComponent },
  // { path: 'posts/:id/comments/:id', component: SingleCommentComponent },
  { path: 'posts/oneCommentTest/:id', component: SingleCommentComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  // for Root allowing multiple route config
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
