import { Injectable } from '@angular/core';

import { FakeserverService } from './fakeserver.service';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, shareReplay, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConnectionService {

    /**
     * inyectamos el httpclient
     */
    constructor(private httpclient: FakeserverService, private realHttpClient: HttpClient) { }

    /**
     * recuperamos la lista de elementos del webservice
     */
    getAlltodoList(): Promise<any> {
        return firstValueFrom(this.httpclient.get("/todos"))
    }

    /**
     * recupera un item
     */
    getTodoById(id: string): Observable<any> {
        return this.httpclient.get("/todos/" + id)
    }

    /**
     * actualziar la informacion de un item
     */
    updateTodoId(id: string, data: any): Observable<any> {
        return this.httpclient.put("/todos/" + id, data)
    }

    /**
     * crear un nuevo elemento
     */
    createTodo(data: any): Observable<any> {
        return this.httpclient.post("/todos", data)
           .pipe(
                shareReplay()
            )
    }

    /**
     * elimina un elemento
     */
    deleteTodoById(id: string): Observable<any> {
        return this.httpclient.delete("/todos/" + id)
    }
}
