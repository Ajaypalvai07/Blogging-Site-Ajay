import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
  imports: [FormsModule, CommonModule,HttpClientModule], 
  providers: [AuthService] 
})
export class CreatePostComponent {
  newPost = {
    title: '',
    content: '',
    featured: false,
    image: '', // Add image property
  };

  selectedImage: string | null = null; // To hold the image preview (either URL or uploaded file)

  // Handle image URL input
  onImageUrlInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedImage = input.value;
    this.newPost.image = input.value; // Set the image URL for the new post
  }

  // Handle image file selection
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string;
        this.newPost.image = reader.result as string; // Set image as base64
      };
      reader.readAsDataURL(file);
    }
  }

  // Create a new post
  createPost() {
    console.log(this.newPost); // Log the post data
    console.log(this.selectedImage); // Log the selected image (URL or base64)
    // Handle post creation logic here (e.g., HTTP request to server)
  }
}
