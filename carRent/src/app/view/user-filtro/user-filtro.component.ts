import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltroService} from '../../service/filtro-usuario/filtro.service';

@Component({
  selector: 'app-user-filtro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-filtro.component.html',
  styleUrl: './user-filtro.component.css'
})
export class UserFiltroComponent implements OnInit{
filtros: any[] = [];
constructor(private filtroService: FiltroService){}
ngOnInit():void{
  // this.listarFiltro();
}

listarFiltroUsuario(idCliente:any):void{
this.filtroService.listarFiltro(idCliente).subscribe({
 next: (filtro:any[]) => {
this.filtros = filtro.map((f)=>({
  nome_cliente: f.nome_cliente,
  placa_carro: f.placa_carro,
  modelo_carro: f.modelo_carro
}))
 },
 error: (err) => {
   console.error('Houve um erro ao enviar dados:', err);
 }
});
}
}


