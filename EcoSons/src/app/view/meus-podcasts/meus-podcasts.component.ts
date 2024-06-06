import { Component } from '@angular/core';
import {HeaderLogadoComponent} from '../../template/header-logado/header-logado.component';
@Component({
    selector: 'app-meus-podcasts',
    standalone: true,
    templateUrl: './meus-podcasts.component.html',
    styleUrl: './meus-podcasts.component.css',
    imports: [HeaderLogadoComponent]
})
export class MeusPodcastsComponent {

}
