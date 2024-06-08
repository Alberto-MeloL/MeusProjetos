import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosService } from '../../service/carros.service';
import { AlugarService } from '../../service/alugar.service';
import { HeaderUsuarioComponent } from '../../template/header-usuario/header-usuario.component';
@Component({
  selector: 'app-home-usuario',
  standalone: true,
  templateUrl: './home-usuario.component.html',
  styleUrl: './home-usuario.component.css',
  imports: [CommonModule, HeaderUsuarioComponent],
})
export class HomeUsuarioComponent implements OnInit {
  carros: any[] = [];

  constructor(
    private carrosService: CarrosService,
    private alugarService: AlugarService
  ) {}

  ngOnInit(): void {
    this.carrosService.listarCarros().subscribe(
      (dados: any[]) => {
        this.carros = dados.map((carro) => ({
          tipo_carro: carro.tipo_carro,
          modelo_carro: carro.modelo_carro,
          id_carro: carro.id_carro,
          placa_carro: carro.placa_carro,
          ano_carro: carro.ano_carro,
          disponibilidade_carro: carro.disponibilidade_carro,
        }));
      },
      (err) => {
        console.error(`Erro ao listar carros ${err}`);
      }
    );

  }


  // método para alugar carro

  alugarCarro(carroId: string):void{

this.carros.filter(carroId
    
)

    // chamar o método para alugar carro
    this.alugarService.alugarCarro(carroId, carroDados ).subscribe({
      next: value => console.log('ok'),
error: err => console.error('oopps',err),
complete() {
  console.log('okk')
},
})
  }
}
