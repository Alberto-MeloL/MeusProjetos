import { Component } from '@angular/core';
import { HeaderDeslogadoComponent } from '../parts/header-deslogado/header-deslogado.component';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderDeslogadoComponent, CadastroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
