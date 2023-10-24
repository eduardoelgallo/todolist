import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import TodoList from 'src/app/core/model/todolist';
import { StateService } from 'src/app/core/services/state.service';
import { TodoItemResolvedModal } from 'src/app/shared/components/add-todolist-item/add-todolist-item.component';

@Component({
  selector: 'app-open',
  templateUrl: './open.page.html',
  styleUrls: ['./open.page.scss'],
})
export class OpenPage implements OnInit {

  $opened: Observable<any> = new Observable<any>()
  showModal: boolean = false

  constructor(private state: StateService) { }

  ngOnInit() {
    this.$opened = this.state.getTodoListInOpen()
  }

  onChangeTodoState($event: TodoList) {
    this.state.madeFavorite($event.id, !$event.is_favorite)
  }

  onAddnewTodoItem() {
    this.showModal = true
  }

  onDoneModalResolve($event: TodoItemResolvedModal) {
    this.showModal = false
    console.log($event)

    this.state.addTodo($event.item)
  }
}
