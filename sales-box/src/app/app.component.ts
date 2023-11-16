import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuConfiguracoesComponent } from "./template/menu-configuracoes/menu-configuracoes.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MenuConfiguracoesComponent]
})
export class AppComponent {
  title = 'sales-box';
}
