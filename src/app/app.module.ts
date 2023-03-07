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
import { PlannerContainerComponent } from './taskboard-folder/plannerview/planner-container/planner-container.component';
import { ColumnViewComponent } from './taskboard-folder/plannerview/column-view/column-view.component';
import { ListViewComponent } from './taskboard-folder/plannerview/list-view/list-view.component';
import { CalendarViewComponent } from './taskboard-folder/plannerview/calendar-view/calendar-view.component';
import { ColumnTaskComponent } from './task/column-task/column-task.component';
import { TaskModalComponent } from './modals/task-modal/task-modal.component';
import { MaterialModule } from './material/material.module';

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
    PlannerContainerComponent,
    ColumnViewComponent,
    ListViewComponent,
    CalendarViewComponent,
    ColumnTaskComponent,
    TaskModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
