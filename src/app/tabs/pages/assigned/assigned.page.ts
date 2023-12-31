import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import TodoList from 'src/app/core/model/todolist';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-assigned',
  templateUrl: './assigned.page.html',
  styleUrls: ['./assigned.page.scss'],
})
export class AssignedPage implements OnInit {

  $assigned: Observable<any> = new Observable<any>()

  constructor(private state: StateService) { }

  ngOnInit() {
    this.$assigned = this.state.getTotoListAssigned()
  }

  onChangeTodoState($event: TodoList) {
    //this.state.madeFavorite($event.id, !$event.is_favorite)
  }

}
