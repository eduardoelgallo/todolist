import { Component, OnInit } from '@angular/core';
import { StateService } from './core/services/state.service';
import { StorageService } from './core/services/storage.service';
import { FakeserverService } from './core/services/fakeserver.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {

    constructor(private state: StateService, private storage: StorageService, private server: FakeserverService) {
        this.initApp()
    }

    /**
     * Initialize app
     */
    async initApp() {
        await this.storage.init();
        await this.server.start();
        await this.state.hydrateApp()
    }
}
