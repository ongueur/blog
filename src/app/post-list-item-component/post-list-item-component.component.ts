import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';


@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;
  @Input() loveIts: number;
  @Input() index: number;

  

  constructor(private blogService: BlogService) {}

  ngOnInit() {
  }

  onAdd(id: number){
    //return this.loveIts++ ;
    this.blogService.addLoveIts(id);
  }

  onSubtract(id: number){
    //return this.loveIts-- ;
    this.blogService.subtractLoveIts(id);
  }

  onDelete(id: number){
    this.blogService.deletePost(id)
  }

  

}
