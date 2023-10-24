import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import TodoList from 'src/app/core/model/todolist';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss'],
})
export class TodoitemComponent  implements OnInit {

  @Input('data') data: TodoList|null = null;
  @Output('onChangeState') onChangeState: any = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onClickTodo() {
    this.onChangeState.emit(this.data)
  }

}
