import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'

import { InMemoryDataService } from './_in-memory-data.service'
import './_rxjs-extensions'

import { AppComponent } from './app/_app.component'
import { AppRoutingModule, routedComponents } from './app-routing/_app-routing.module'
import { HeroService } from './hero/_hero.service'
import { HeroSearchComponent } from './hero-search/_hero-search.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
    ],

    declarations: [
        AppComponent,
        HeroSearchComponent,
        routedComponents
    ],

    providers: [
        HeroService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }