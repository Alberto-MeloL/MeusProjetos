import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroService } from '../../service/filtro-usuario/filtro.service';
import { FiltrosDatasService } from '../../service/filtros-datas/filtros-datas.service';


@Component({
  selector: 'app-user-filtro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-filtro.component.html',
  styleUrl: './user-filtro.component.css',
})
export class UserFiltroComponent implements OnInit {
  filtros: any[] = [];
  datas: any[] = [];
  constructor(
    private filtroService: FiltroService,
    private filtrosDatasService: FiltrosDatasService,
  ) {}
  ngOnInit(): void {
    // this.listarFiltro();
  }

  listarFiltroUsuario(idCliente: any): void {
    this.filtroService.listarFiltro(idCliente).subscribe({
      next: (filtro: any[]) => {
        this.filtros = filtro.map((f) => ({
          nome_cliente: f.nome_cliente,
          placa_carro: f.placa_carro,
          modelo_carro: f.modelo_carro,
        }));
      },
      error: (err) => {
        console.error('Houve um erro ao enviar dados:', err);
      },
    });
  }

  listarDatas(data_locacao: string, data_devolucao: string): void {
    this.filtrosDatasService
      .listarDatas(data_locacao, data_devolucao)
      .subscribe({
        next: (dados: any[]) => {
          this.datas = dados.map((d) => ({
            nome_carro: d.nome_carro,
            nome_cliente: d.nome_cliente,
            data_locacao: d.data_locacao,
            data_devolucao: d.data_devolucao,
          }));
        },
        error: (err) => {
          console.error(`Houve um erro, em listar as datas ${err}`);
        },
      });
  }

}
