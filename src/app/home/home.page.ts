import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConnectionService } from "./../core/services/connection.service"
import { StateService } from '../core/services/state.service';
import { Observable, Subscription, shareReplay, tap } from 'rxjs';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    $opened: Observable<any> = new Observable<any>()
    $assigned: Observable<any> = new Observable<any>()
    $inPorgress: Observable<any> = new Observable<any>()
    $complete: Observable<any> = new Observable<any>()


    constructor(private state: StateService) { }

    ngOnInit() {
        this.$opened = this.state.getAllTodos()
        //this.$assigned = this.state.getTotoListInAssigned()
        //this.$inPorgress = this.state.getTodoListInProgress()
        //this.$complete = this.state.getTodoListInComplete()
    }
    onAddTodo() {
        console.log("home: onAddTodo")
        this.state.addTodo({
            id: "aasdasd",
            title: "asdasd",
            description: "asdasd",
            state: 1,
            is_favorite: false,
            created_at: "asdasd",
            latitude: 1231,
            longitude: 212313,
        })
            .subscribe({
                next: (v) => console.log(v),
                error: (e) => {
                    alert("Estamos teniendo problemas")
                }
            });
    }

}
