import { Component, Input } from '@angular/core';
import { Hero } from './class'

@Component({
    selector: 'hero',
    template: `{%= include('tpl.html') %}`
})

export class HeroComponent {
    @Input()

    hero: Hero
}