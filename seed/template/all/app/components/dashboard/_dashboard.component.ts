import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './../hero/_hero.interface';
import { HeroService } from './../hero/_hero.service';

@Component({
    // moduleId: module.id,
    selector: 'my-dashboard',
    styles: [`{%= include('dashboard.component.css') %}`],
    template: `{%= include('dashboard.component.html') %}`
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes()
          .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
