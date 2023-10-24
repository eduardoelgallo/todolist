import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import TodoList from 'src/app/core/model/todolist';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.page.html',
  styleUrls: ['./complete.page.scss'],
})
export class CompletePage implements OnInit {

  $complete: Observable<any> = new Observable<any>()

  constructor(private state: StateService) { }

  ngOnInit() {
    this.$complete = this.state.getTodoListInComplete()
  }

  onChangeTodoState($event: TodoList) {
    console.log($event)
  }
}
