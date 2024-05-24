import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './template/home/home.component';
import { CadastroService} from './service/cadastro.service';
import { LoginService } from './service/login.service';

// lógica dos imports

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [CadastroService, LoginService],
    // aqui defino meus componentes
    imports: [RouterOutlet, HeaderComponent, HomeComponent, HttpClientModule]
})
export class AppComponent {
  title = 'carRent';
}
