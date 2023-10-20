import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-open',
  templateUrl: './open.page.html',
  styleUrls: ['./open.page.scss'],
})
export class OpenPage implements OnInit {

  $opened: Observable<any> = new Observable<any>()

  constructor(private state: StateService) { }

  ngOnInit() {
    this.$opened = this.state.getTodoListInOpen()
  }
}
