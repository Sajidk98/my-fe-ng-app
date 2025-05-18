import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  template: `
    <p>{{title}}<p>
    <app-header></app-header>
    <app-home />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Application Title';
}
