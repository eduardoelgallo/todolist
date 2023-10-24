import { Injectable } from '@angular/core';

import { FakeserverService } from './fakeserver.service';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ConnectionService {

    webAPI: string | null = null
    httpclient: any = null

    /**
     * inyectamos el httpclient
     */
    constructor(fakeHttpclient: FakeserverService, angularHttpclient: HttpClient) {
        this.httpclient = environment.fake ? fakeHttpclient : angularHttpclient

        this.webAPI = environment.webAPI
    }

    /**
     * recuperamos la lista de elementos del webservice
     */
    getAlltodoList(): Promise<any> {
        return firstValueFrom(this.httpclient.get(`${this.webAPI}/api/tasks`))
    }

    /**
     * recupera un item
     */
    getTodoById(id: string): Observable<any> {
        return this.httpclient.get(`${this.webAPI}/api/tasks/${id}`)
    }

    /**
     * actualziar la informacion de un item
     */
    updateTodoId(id: string, data: any): Observable<any> {
        return this.httpclient.put(`${this.webAPI}/api/tasks/${id}`, data)
    }

    /**
     * crear un nuevo elemento
     */
    createTodo(data: any): Observable<any> {
        return this.httpclient.post(`${this.webAPI}/api/tasks/`, data)
            .pipe(
                shareReplay()
            )
    }

    /**
     * elimina un elemento
     */
    deleteTodoById(id: string): Observable<any> {
        return this.httpclient.delete(`${this.webAPI}/api/tasks/${id}`)
    }
}
