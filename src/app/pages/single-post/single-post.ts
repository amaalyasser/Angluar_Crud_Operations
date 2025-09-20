import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  standalone: false,
  templateUrl: './single-post.html',
  styleUrl: './single-post.css'
})
export class SinglePost {
  id : any
    singlePost :any
  posts: any;
constructor(private activatedRoute: ActivatedRoute) {
  this.id = this.activatedRoute.snapshot.paramMap.get('postId');

  // Retrieve posts list from local storage
  const storedPosts = localStorage.getItem('postsList');
  if (storedPosts) {
    this.posts = JSON.parse(storedPosts);
  }
  this.singlePost = this.posts.find((item: { id: any; }) => item.id == this.id);
}
  

}
