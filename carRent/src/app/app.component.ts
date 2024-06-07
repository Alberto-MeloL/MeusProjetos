import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './template/home/home.component';
import { CadastroService} from './service/cadastro/cadastro.service';
import { LoginService } from './service/login/login.service';
import {CarrosService} from './service/carros.service';
import {AluguelService} from './service/aluguel.service';
import {FuncionarioService} from './service/funcionario.service';

// lógica dos imports

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    // para que serve o providers
    providers: [CadastroService, LoginService, CarrosService, AluguelService,FuncionarioService],
    // aqui defino meus componentes
    imports: [RouterOutlet, HomeComponent, HttpClientModule]
})
export class AppComponent {
  title = 'carRent';
}
