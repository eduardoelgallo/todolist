import { Injectable } from '@angular/core';
import { generateRandomDataset } from '../helpers';
import { StorageService } from './storage.service';
import { Observable, from, shareReplay } from 'rxjs';
import { faker } from '@faker-js/faker';

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
      console.log({
        url,
        data
      })
            let id = url.split("/")[url.split("/").length-1]



              let list = this.database.map((item: any) => {

                if (item.id == id) {
                  return {
                    ...item,
                    ...data
                  }
                }

                return item
              })

              this.database = list

              let newitem = list.filter((item: any) => item.id == id)

              console.log({
                list,
                id
              })

        return from<any>(this.storage.set("database", JSON.stringify(this.database))?.then(res => newitem))
    }

    /**
     * metodo get del servidor
     */
    post(url: string, data: any): Observable<any> {
        return from(new Promise<any>((resolve, rejected) => {
            setTimeout(() => {

                let resource = {
                    id: faker.string.uuid(),
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
