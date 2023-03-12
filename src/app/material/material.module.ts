import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog'; 
import {DragDropModule} from '@angular/cdk/drag-drop'; 

@NgModule({
  imports: [
    MatDialogModule,
    DragDropModule
  ],
  exports: [
    MatDialogModule,
    DragDropModule
  ]
})
export class MaterialModule {}