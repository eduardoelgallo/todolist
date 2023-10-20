import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.page.html',
  styleUrls: ['./inprogress.page.scss'],
})
export class InprogressPage implements OnInit {

  $inPorgress: Observable<any> = new Observable<any>()

  constructor(private state: StateService) { }

  ngOnInit() {
    this.$inPorgress = this.state.getTodoListInProgress()
  }

}
