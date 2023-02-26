import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../posts/posts.service';
import { CommentService } from './comments.service';
import { Comment } from '../model/interfaces';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  postId!: number;
  comments!: Comment[];

  constructor(private commentService: CommentService, private route: ActivatedRoute) {}

  // ngOnInit(): void {
    
  //   this.route.queryParams.subscribe(params => {
  //     this.postId = params['postId'];
  //     console.log('postId: ', this.postId);
  //     this.commentService.getComments(this.postId).subscribe(
  //       (data: Comment[]) => {
  //         console.log('data: ', data);
  //         this.comments = data;
  //       },
  //       error => console.error(error)
  //     );
  //   });
  // }
  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id') as any
    console.log('postId: test ', this.postId);
    this.commentService.getComments(this.postId).subscribe(
      (data: Comment[]) => {
        this.comments = data;
      },
      error => console.error(error)
    );
  }

}
