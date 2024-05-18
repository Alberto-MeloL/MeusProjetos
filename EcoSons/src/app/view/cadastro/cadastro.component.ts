import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {CadastroService} from '../../service/cadastro/cadastro.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],//?
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  formCliente: FormGroup

constructor(private formBuilder: FormBuilder,
  private cadastroService: CadastroService,
  private router: Router
){
this.formCliente = this.formBuilder.group({
  nome: [''],
  email: [''],
  senha: ['']
})
}

// porque tem que ser dento do método
onSubmit(){
  this.cadastroService.cadastrarUsuario(this.formCliente.value).subscribe({
next: (res) =>{
  this.router.navigate(['/login'])
  console.log(`Cadastro realizado com sucesso: ${res}`)
},
error: (err) =>{
  console.error(`Erro ao cadastar ${err}`)
}
  })
}

}
