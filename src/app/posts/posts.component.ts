import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  isLoading = true;
  posts$ = this.postService.getPosts();
  constructor(private postService: PostService, private router: Router) {
    console.log(' posts$: ', this.posts$);
  }
  viewComments(postId: number): void {
    // not query params, refactor
    this.router.navigate(['/comments'], { queryParams: { postId: postId } });
//     this.router.navigate(['/posts', postId, 'comments']);

// // // Navigate without updating the URL
// // router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
  }
}
