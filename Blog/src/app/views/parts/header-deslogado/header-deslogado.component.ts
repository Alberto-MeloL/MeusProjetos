import { Component } from '@angular/core';

@Component({
  selector: 'app-header-deslogado',
  standalone: true,
  imports: [],
  templateUrl: './header-deslogado.component.html',
  styleUrl: './header-deslogado.component.css',
})
export class HeaderDeslogadoComponent {
  frases: string[] = [
    '',
    '',
    '',
    ''
  ]
}
