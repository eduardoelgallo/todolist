import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface TodoItemResolvedModal {
  reason: string,
  item: any
}

@Component({
  selector: 'app-add-todolist-item',
  templateUrl: './add-todolist-item.component.html',
  styleUrls: ['./add-todolist-item.component.scss'],
})
export class AddTodolistItemComponent  implements OnInit {

  @Input("state") state: number = 1;
  @Input("isOpen") isOpen: boolean = false
  @Output("onResolved") onResolved: any = new EventEmitter<TodoItemResolvedModal>()

  title: any = ''
  description: any = ''

  constructor() { }

  ngOnInit() {

  }

  onClose() {
    this.onResolved.emit({
      reason: 'close'
    })
  }

  resetForm () {
    this.description = ''
    this.title = ''
  }

  onDone() {
    this.onResolved.emit({
      reason: 'done',
      item: {
        title: this.title,
        description: this.description,
        state: this.state,
        is_favorite: false,
        latitude: 12313,
        longitude: 123
      }
    })

    this.resetForm ()

  }

}
