import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CadastroService } from '../../service/cadastro/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  formCliente: FormGroup; //o grupo de dados que vai formar

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
    private router: Router
  ) {
    this.formCliente = this.formBuilder.group({
      nome: [''],
      sobrenome: [''],
      email: [''],
      cep: [''],
      estado: [''],
      senha: [''],
      telefone: [''],
      cpf: [''],
      cidade: ['']
    });
  }

  onSubmit() {
    this.cadastroService.cadastrarCliente(this.formCliente.value).subscribe({
      next: (res) => {
        this.router.navigate(['/login'])
        console.log('Cadastro realizado com sucesso:', res);
      },
      error: (err) => {
        console.log('Falha ao cadastrar:', err);
      },
    });
  }
}
