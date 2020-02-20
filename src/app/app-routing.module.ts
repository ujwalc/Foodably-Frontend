import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BlogsComponent } from './blogs/blogs.component';
import {ProfileComponent} from './profile/profile.component'
import { BlogArticleComponent } from './blogs/blog-article/blog-article.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'blogs', component: BlogsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'blogs/:id', component: BlogArticleComponent },
  { path:'shoppinglist', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
