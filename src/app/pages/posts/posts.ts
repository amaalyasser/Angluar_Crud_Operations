import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor  } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-posts',
  standalone: true, 
  imports: [FormsModule, NgClass, NgFor,RouterModule],  
  templateUrl: './posts.html',
  styleUrls: ['./posts.css'],
})

export class Posts {
  postsList: any[] = [];

  newPost = {
    id: null,
    title: '',
    body: '',
  };

  handleAddPost() {
    debugger;
      this.postsList.push({
        userId: 1, 
        id: this.newPost.id,
        title: this.newPost.title,
        body: this.newPost.body,
      });
  localStorage.setItem('postsList', JSON.stringify(this.postsList));
      this.newPost = { id: null, title: '', body: '' };
    }


  deletePost(index: number) {
    this.postsList.splice(index, 1);
      localStorage.setItem('postsList', JSON.stringify(this.postsList));
  }

  editPost(index: number) {
    // Implement edit logic if required
  }

  ngOnInit() {
  const savedPosts = localStorage.getItem('postsList');
  if (savedPosts) {
    this.postsList = JSON.parse(savedPosts);
  }
}
}
