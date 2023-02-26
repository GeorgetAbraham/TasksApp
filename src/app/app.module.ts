import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { TaskboardComponent } from './taskboard-folder/taskboard/taskboard.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './taskboard-folder/sidebar/sidebar.component';
import { BoardviewComponent } from './taskboard-folder/boardview/boardview.component';
import { QuerybarComponent } from './taskboard-folder/querybar/querybar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    UserdetailsComponent,
    TaskboardComponent,
    HomeComponent,
    SidebarComponent,
    BoardviewComponent,
    QuerybarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
