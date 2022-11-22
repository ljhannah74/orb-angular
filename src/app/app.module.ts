import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainComponent } from './main/main.component';
import { StateComponent } from './state/state.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectService } from './select-service';
import { CountyComponent } from './county/county.component';

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        MainComponent,
        CountyComponent,
        StateComponent
    ],
    providers: [SelectService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class AppModule {
  
 }
