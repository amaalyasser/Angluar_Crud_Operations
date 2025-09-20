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
  editIndex!: number;

  /*handleAddPost() {
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
*/
handleAddPost() {
  debugger
  if ( this.editIndex !== -1 && this.editIndex !== undefined) {
    this.postsList[this.editIndex] = {
      id: this.newPost.id,
      title: this.newPost.title,
      body: this.newPost.body,
    };
  } else {
    // Add
    this.postsList.push({
      id: this.newPost.id,
      title: this.newPost.title,
      body: this.newPost.body,
    });
  }

  localStorage.setItem('postsList', JSON.stringify(this.postsList));

  this.newPost = { id: null, title: '', body: '' };
  this.editIndex= -1;
}


  deletePost(index: number) {
    this.postsList.splice(index, 1);
      localStorage.setItem('postsList', JSON.stringify(this.postsList));
  }

 editPost(index: number) {
  this.newPost = { 
    id: this.postsList[index].id, 
    title: this.postsList[index].title, 
    body: this.postsList[index].body 
  };

  this.editIndex = index;
}
  ngOnInit() {
  const savedPosts = localStorage.getItem('postsList');
  if (savedPosts) {
    this.postsList = JSON.parse(savedPosts);
  }
}
}
