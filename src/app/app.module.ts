import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogSectionComponent } from './blogs/blog-section/blog-section.component';
import { BlogItemComponent } from './blogs/blog-item/blog-item.component';
import { RecipeSectionComponent } from './recipes/recipe-section/recipe-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    RecipesComponent,
    RecipeItemComponent,
    BlogsComponent,
    BlogSectionComponent,
    BlogItemComponent,
    RecipeSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
