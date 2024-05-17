  import { Component, AfterViewInit, OnDestroy } from '@angular/core';
  import {CommonModule} from '@angular/common';

  @Component({
    selector: 'app-carrossel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './carrossel.component.html',
    styleUrl: './carrossel.component.css',
  })
  export class CarrosselComponent implements AfterViewInit, OnDestroy{
    // aqui defini os caminhos das imagens que vão ficar alternando no carrossel
    imagens: string[] = [
      'assets/image/apresentando-carrossel-1.png',
      'assets/image/frases-inpiracoes-2.png',
      'assets/image/buscas-carrossel-3.png',
    ];

    // método para alternar imagens
    indice: number = 0;
    imagemAtual?: string;
    private intervalId: any;


    //inicia o temporizador
  ngAfterViewInit(): void{
  this.iniciarLoop();
  }


  //para com o loop
  ngOnDestroy(): void{
  this.finalizarLoop();
  }

  //chama a cada três segundos
  iniciarLoop(): void{
    this.intervalId = setInterval(() =>{
  this.mudarImagem();//chama o método
    }, 3000)
  }

  //limpa o temporizador
  finalizarLoop(): void{
    clearInterval(this.intervalId);
  }

  //loop para mudar imagem
    mudarImagem(): void {
      this.indice = (this.indice + 1) % this.imagens.length;//tamanho da matriz é 3 (indice é != de tamanho)
      this.imagemAtual = this.imagens[this.indice];
    }
  }
