import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular-in-memory-web-api';


import { AppModule } from './app.module';
import {bootstrap} from "@angular/upgrade/src/angular_js";
import {TodoSeedData} from "./components/shared/todo.data";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, [
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: TodoSeedData },
]);