import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './template/home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    // aqui defino meus componentes
    imports: [RouterOutlet, HeaderComponent, HomeComponent]
})
export class AppComponent {
  title = 'carRent';
}
