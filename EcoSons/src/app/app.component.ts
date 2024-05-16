import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import {CarrosselComponent} from './view/carrossel/carrossel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // aqui defino meus componentes
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CarrosselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EcoSons';
}
