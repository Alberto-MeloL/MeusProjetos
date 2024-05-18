import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formCliente: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.formCliente = this.formBuilder.group({
      email: [''],
      senha: [''],
    });
  }

  onSubmit() {
// event.preventDefault()
    const {email, senha} = this.formCliente.value
    this.loginService.logarUsuario(email, senha).subscribe({
      next: (res) => {
        this.router.navigate(['/meus-podcasts']);
        console.log(`Login realizado com sucesso ${res}`);
      },
      error: (err) => {
        console.error(`Erro ao realizar login ${err}`);
      },
    });
  }
}
