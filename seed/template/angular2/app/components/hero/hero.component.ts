import { Component, Input } from '@angular/core';
import { Hero } from './hero.class'

@Component({
    selector: 'hero',
    template: `{%= include('hero.html') %}`
})

export class HeroComponent {
    @Input()

    hero: Hero
}