import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadingComponent } from './loading/loading.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    exports: [
        // Shared Modules
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        // Shared Components
        ToastComponent,
        LoadingComponent
    ],
    declarations: [
        ToastComponent,
        LoadingComponent
    ],
    providers: [
        ToastComponent
    ]
})
export class SharedModule {  }
