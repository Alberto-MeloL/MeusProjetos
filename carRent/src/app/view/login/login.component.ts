import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

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
    private router: Router,
    private loginService: LoginService
  ) {
    this.formCliente = this.formBuilder.group({
      email: [''],
      senha: [''],
    });
  }

  onSubmit() {
    const { email, senha } = this.formCliente.value;
    this.loginService.logarUsuario(email, senha).subscribe({
      next: (res) => {
        this.router.navigate(['/locacoes']);
        console.log('Login realizado com sucesso.', res);
      },
      error: (err) => {
        console.error('Erro ao realizar login', err)
      }
    });
  }
}
