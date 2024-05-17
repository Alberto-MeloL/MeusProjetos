import { Routes } from '@angular/router';
import {HomeComponent} from './view/home/home.component';
import {CadastroComponent} from './view/cadastro/cadastro.component';
import {LoginComponent} from './view/login/login.component';
import {MeusPodcastsComponent} from './view/meus-podcasts/meus-podcasts.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'meus-podcasts', component: MeusPodcastsComponent},
];
