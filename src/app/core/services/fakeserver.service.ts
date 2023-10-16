import { Injectable } from '@angular/core';
import { generateRandomDataset } from '../helpers';
import { StorageService } from './storage.service';
import { Observable, from, shareReplay } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FakeserverService {

    private database: any = []

    constructor(private storage: StorageService) {

    }

    /**
     * start fakerServer
     */
    public async start() {
        let cacheDatabase = await this.storage.get("database");

        if (cacheDatabase) {
            this.database = JSON.parse(cacheDatabase)
        } else {
            let data = generateRandomDataset(10);
            await this.storage.set("database", JSON.stringify(data));

            this.database = data;
        }
    }

    /**
     * metodo get del servidor
     */
    get(url: string): Observable<any> {
        return from(new Promise<any>((resolve, rejected) => {
            setTimeout(() => {
                resolve(this.database)
            }, 3000);
        }))
    }

    /**
     * metodo get del servidor
     */
    put(url: string, data: any): Observable<any> {
        return from(
            new Promise<any>((resolve, rejected) => {
                setTimeout(() => {
                    rejected("No implementado")
                }, 3000);
            })
        )
    }

    /**
     * metodo get del servidor
     */
    post(url: string, data: any): Observable<any> {
        return from(new Promise<any>((resolve, rejected) => {
            setTimeout(() => {

                let resource = {
                    ...data,
                    created_at: Date.now().toString()
                }

                this.database = [...this.database, resource]

                this.storage.set("database", JSON.stringify(this.database))?.then(() => {
                    resolve(resource)
                })
            }, 3000);
        }))
    }

    /**
    * metodo get del servidor
    */
    delete(url: string): Observable<any> {
        return from(
            new Promise<any>((resolve, rejected) => {
                setTimeout(() => {
                    rejected("No implementado")
                }, 3000);
            })
        )
    }
}
