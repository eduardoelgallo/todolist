import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import { IonicModule } from '@ionic/angular';
import { AddTodolistItemComponent } from './components/add-todolist-item/add-todolist-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoitemComponent,
    AddTodolistItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    TodoitemComponent,
    AddTodolistItemComponent
  ]
})
export class SharedModule { }
