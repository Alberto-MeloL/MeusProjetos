import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarrosService} from '../../service/carros.service';
import { HeaderUsuarioComponent } from '../../template/header-usuario/header-usuario.component';
@Component({
    selector: 'app-home-usuario',
    standalone: true,
    templateUrl: './home-usuario.component.html',
    styleUrl: './home-usuario.component.css',
    imports: [CommonModule, HeaderUsuarioComponent]
})
export class HomeUsuarioComponent implements OnInit {
  carros: any[] = [];

  constructor(private carrosService: CarrosService) {}

  ngOnInit(): void {
    this.carrosService.listarCarros().subscribe(
      (dados: any[]) => {
        this.carros = dados.map(carro => ({
          tipo_carro: carro.tipo_carro,
            modelo_carro: carro.modelo_carro,
        id_carro: carro.id_carro,
        placa_carro: carro.placa_carro,
        ano_carro: carro.ano_carro,
        disponibilidade_carro: carro.disponibilidade_carro

        }))

      },
      (err) => {
        console.error(`Erro ao listar carros ${err}`);
      }
    );
  }
}
