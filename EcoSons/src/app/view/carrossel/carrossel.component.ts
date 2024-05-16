import { Component } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css',
})
export class CarrosselComponent {
  // aqui defini os caminhos das imagens que vão ficar alternando no carrossel
  imagens: string[] = [
    'assets/image/apresentando-carrossel-1.png',
    'assets/image/frases-inpiracoes-2.png',
    'assets/image/buscas-carrossel-3.png',
  ];

  // método para alternar imagens
  indice: number = 0;
  imagemAtual?: string;

  mudarImagem(): void {
    setTimeout(() => {
      this.imagemAtual = this.imagens[this.indice];
      this.indice++;
      console.log(this.imagemAtual)
    }, 3000);
  }
}
