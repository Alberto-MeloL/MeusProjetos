import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import {CadastroService} from '../../service/CadastroService';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  formCliente: FormGroup; //o grupo de dados que vai formar

  constructor(private formBuilder: FormBuilder) {
    this.formCliente = this.formBuilder.group({
      nome: [''],
      sobrenome: [''],
      email: [''],
      senha: [''],
      cep: [''],
      cidade: [''],
      estado: [''],
      celular: [''],
    });
  }
}
