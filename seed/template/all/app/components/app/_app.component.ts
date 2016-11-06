import { Component } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'my-app',
    styles: [`{%= include('app.component.css') %}`],
    template: `{%= include('app.component.html') %}`
})

export class AppComponent {
    title = 'Tour of Heroes';
}