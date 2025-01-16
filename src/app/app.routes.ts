import { Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';

// Guards
import { AuthGuard } from './auth.guard';
import { CanDeactivateGuard } from './deactivate.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route for Home page
  { path: 'home', component: HomeComponent }, // Home page
  { path: 'signup', component: SignupComponent }, // Signup page
  { path: 'blog/:id', component: BlogDetailsComponent, canActivate: [AuthGuard] }, // Protected: View specific blog post
  { path: 'login', component: LoginComponent }, // Login page
  { path: 'register', component: RegisterComponent }, // Register page
  { 
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard], // Protect dashboard
    canActivateChild: [AuthGuard], // Protect child routes
    children: [
      { path: 'create-post', component: CreatePostComponent }, // Create new blog post
      { path: 'edit-post/:id', component: EditPostComponent }, // Edit specific blog post
    ],
  },
  { 
    path: 'profile', 
    component: ProfileComponent, 
    canActivate: [AuthGuard], // Protect user profile
  },
  { 
    path: 'create-post', 
    component: CreatePostComponent, 
    canDeactivate: [CanDeactivateGuard], // Warn about unsaved changes
    canActivate: [AuthGuard], // Protect route
  },
  { 
    path: 'edit-post/:id', 
    component: EditPostComponent, 
    canDeactivate: [CanDeactivateGuard], // Warn about unsaved changes
    canActivate: [AuthGuard], // Protect route
  },
  { path: '**', redirectTo: 'home' }, // Redirect to Home page if no other route matches
];
