import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    /**
     * definicion del sistema de almacenamiento temporal
     */
    private _storage: Storage | null = null;

    /**
     * inyectamos el sistema de almacenamiento de angular
     */
    constructor(private storage: Storage) { }

    /**
     * iniciamos el sistema de almacenamiento
     */
    public async init() {
        const storage = await this.storage.create();
        this._storage = storage;
    }

    /**
     * agregar o actualizar un elemento
     */
    public set(key: string, value: any) {
        return this._storage?.set(key, value);
    }

    /**
     * recuperar un elemento
     */
    public get(key: string) {
        return this._storage?.get(key);
    }

    /**
     * limpiar el cache
     */
    public clear() {
        return this._storage?.clear();
    }

    /**
     * remover elementos del cache
     */
    public remove(key: string) {
        return this._storage?.remove
    }

}
