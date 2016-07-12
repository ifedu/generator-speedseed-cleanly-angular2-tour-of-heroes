import { Component } from '@angular/core'
import { Hero } from './../hero/class'
import { HeroComponent } from './../hero/main'

@Component({
    directives: [HeroComponent],
    selector: 'app',
    styles: [`{%= include('tpl.css') %}`],
    template: `{%= include('tpl.html') %}`
})

export class AppComponent {
    title = 'Tour of Heroes'
    selectedHero = this.hero

    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    }

    heroes: Hero[] = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ]

    onSelect(hero: Hero) {
        this.selectedHero = hero
    }
}