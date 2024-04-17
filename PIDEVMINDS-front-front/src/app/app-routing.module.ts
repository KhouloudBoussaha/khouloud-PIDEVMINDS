import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { NewCategoryComponent } from './pages/category/new-category/new-category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EntrepriseComponent } from './pages/entreprise/entreprise.component'; 
import { EvenementComponent } from './pages/evenement/evenement.component'; 
import { CommunicationComponent } from './pages/communication/communication.component'; 
import { StageComponent } from './pages/stage/stage.component';
import { CandidatureComponent } from './pages/candidature/candidature.component'; 
import { UserprofilComponent } from './pages/userprofil/userprofil.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CreatePost1Component } from './pages/create-post1/create-post1.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { SearchByNameComponent } from './pages/search-by-name/search-by-name.component';
import { ChatComponent } from './chat/chat.component';
const routes: Routes = [
  { path:'dashboard', component: DashboardComponent },
  { path:'category', component: CategoryListComponent },
  { path: '', redirectTo: 'view-category', pathMatch: 'full' }, 
  { path:'new-category', component: NewCategoryComponent },
  {path:'entreprise', component:EntrepriseComponent},
  {path:'evenement', component:EvenementComponent},
  {path:'communication',component:CommunicationComponent},
  {path:'stage',component:StageComponent},
  {path:'candidature',component:CandidatureComponent},
  {path:'userprofil',component:UserprofilComponent},
  {path:'Blogs',component:BlogsComponent},
  {path:'create-post1',component:CreatePost1Component},
  {path:'view-all',component:ViewAllComponent},
  {path:'view-post/:id',component:ViewPostComponent},
  {path:'search-by-name',component:SearchByNameComponent},
  {path:'Chat',component:ChatComponent},


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
