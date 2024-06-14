import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../service/funcionarios/funcionario.service';
import { FinalizarAlugueisService } from '../../service/finalizar-alugueis/finalizar-alugueis.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-funcionario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-funcionario.component.html',
  styleUrl: './home-funcionario.component.css',
})
export class HomeFuncionarioComponent implements OnInit {
  alugueis: any[] = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private finalizarAlugueisService: FinalizarAlugueisService
  ) {}

  ngOnInit(): void {
    this.listarAlugueis();
  }

  listarAlugueis(): void {
    this.funcionarioService.listarAlugueis().subscribe(
      (alugueis: any[]) => {
        this.alugueis = alugueis.map((a) => ({
          placa_carro: a.placa_carro,
          modelo_carro: a.modelo_carro,
        }));
      },
      (error) => {
        console.error('Erro ao listar alugueis:', error);
      }
    );
  }

  finalizarAlgueis(): void {
    this.finalizarAlugueisService.finalizarAlgueis().subscribe({
      next: (n) => {
        console.log(n);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
