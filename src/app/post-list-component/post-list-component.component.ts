import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  posts: any[];

  postsSubscription: Subscription;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.postsSubscription = this.blogService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.blogService.emitPostsSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
