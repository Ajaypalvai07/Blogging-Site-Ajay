import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { CreatePostComponent } from '../create-post/create-post.component';
import { EditPostComponent } from '../edit-post/edit-post.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { SliceContentPipe } from '../../slice-content.pipe';
import { UppercaseContentPipe } from '../../uppercase-content.pipe';
import { CapitalizePipe } from '../../captilize-content.pipe';
import { HighlightDirective } from '../../highlight.directive';

@NgModule({
  declarations: [
    AppComponent,  
    HomeComponent,
    BlogDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CreatePostComponent,
    EditPostComponent,
    NavbarComponent,
    FooterComponent,
    SliceContentPipe,
    UppercaseContentPipe,
    CapitalizePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [SliceContentPipe],
  bootstrap: [AppComponent]  
})
export class AppModule { }
