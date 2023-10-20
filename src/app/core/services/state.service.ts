import { Injectable } from '@angular/core';
import { ConnectionService } from './connection.service';
import { StorageService } from './storage.service';
import { CACHE_TIME, TodoListState } from 'src/constants';
import TodoList from '../model/todolist';
import { BehaviorSubject, Observable, catchError, concatAll, filter, from, map, of, pipe, shareReplay, tap, toArray, zip } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class StateService {
    /**
     * fuente de datos
     */
    private _todos: BehaviorSubject<TodoList[]> = new BehaviorSubject<TodoList[]>([]);

    /**
     * observable para subcribirnos a los datos
     */
    public readonly todos: Observable<TodoList[]> = this._todos.asObservable();

    /**
     * Constructor del servicio de stado que importa dos servicios
     * la conecion al wwebservice y el servicios de almacenamiento
     */
    constructor(private connection: ConnectionService, private storage: StorageService) { }

    /**
     * funciona para hidratar la aplicacion con los datos en cache o en el webservice
     */
    async hydrateApp() {
        let cacheInExpire = await this.storage.get("cache_in_expire");

        if (cacheInExpire && Date.now() < cacheInExpire) {
            let list = JSON.parse(await this.storage.get("list"))

            this._todos.next(list)
        } else {
            const list = await this.connection.getAlltodoList()

            this._todos.next(list)

            await this.storage.set("list", JSON.stringify(list));
            await this.storage.set("cache_in_expire", (new Date()).setMinutes(((new Date()).getMinutes() + CACHE_TIME)));
        }
    }

    /**
     * recuperar toda la lista
     */
    getAllTodos () {
        return this.todos
    }

    /**
     * Recupera la lista con elementos en estado abierto
     */
    getTodoListInOpen() {
        return this.getTodosByState(TodoListState.OPEN)
    }

    /**
     * Recupera la lista con elementos en estado asignado
     */
    getTotoListAssigned() {
        return this.getTodosByState(TodoListState.ASSIGNED)
    }

    /**
     * Recupera la lista con elementos en estado en progreso
     */
    getTodoListInProgress() {
        return this.getTodosByState(TodoListState.INPROGRES)
    }

    /**
     * Recupera la lista con elementos ene stado completado
     */
    getTodoListInComplete() {
        return this.getTodosByState(TodoListState.COMPLETE)
    }

    /**
     * recupera una lista de elementos por estado
     */
    getTodosByState(state: number) {
        return this.todos.pipe(
            shareReplay(),
            map((items: any) => {
                console.log(items)
                return items.filter((item: any) => item.state == state)
            })
        )
    }

    /**
     * crea un nuevo elemento en la lista
     */
    addTodo(newTodo: TodoList) {
        let obs = this.connection.createTodo(newTodo);

        obs.subscribe(
            todoFormServer => {
                let newList = [...this._todos.getValue(), todoFormServer]

                this.storage.set("list", JSON.stringify(newList));
                this._todos.next(newList);
            });

        return obs;
    }

}
