import { Component } from '@angular/core';

@Component({
  selector: 'rtm-root',
  template: `
    <router-outlet />
  `,
  styles: [':host { height: 100vh; display: block; }'],
})
export class AppComponent {}
