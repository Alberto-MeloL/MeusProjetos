import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import {CadastroService} from './service/cadastro/cadastro.service';
import {LoginService} from './service/login/login.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  // aqui defino meus componentes
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HttpClientModule],
  providers: [CadastroService, LoginService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EcoSons';
}
