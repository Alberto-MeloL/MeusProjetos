import { Routes } from '@angular/router';
import {CadastroComponent} from './view/cadastro/cadastro.component';
import {LoginComponent} from './view/login/login.component';
import {HomeComponent} from './template/home/home.component';
import {HomeUsuarioComponent} from './view/home-usuario/home-usuario.component';
import {HomeFuncionarioComponent} from './view/home-funcionario/home-funcionario.component';
import {UserFiltroComponent} from './view/user-filtro/user-filtro.component';
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'locacoes', component: HomeUsuarioComponent},
  {path: 'alugueis', component: HomeFuncionarioComponent},
  {path: 'filtros', component: UserFiltroComponent},
];
