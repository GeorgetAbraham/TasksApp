import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


// notes --->neeed to add child paths, query params, route params(possibly for pagination),Guard for user authentication
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"taskboard",component:TaskboardComponent},
  {path:"usersettings",component:UserdetailsComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
