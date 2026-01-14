import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <main>
      <h1>Turbo Angular Hono</h1>
      <p>Welcome to the monorepo with Turborepo, Angular and Hono</p>
    </main>
  `,
  styles: [
    `
      :host {
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
      }

      main {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.2em;
        opacity: 0.9;
      }
    `,
  ],
})
export class AppComponent {
  title = 'frontend';
}
