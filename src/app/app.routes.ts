import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { NotaFiscalComponent } from './pages/nota-fiscal/nota-fiscal.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },

    {
        path: 'cadastro',
        component: CadastroComponent
    },

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'nota-fiscal',
        loadComponent: () => import('./pages/nota-fiscal/nota-fiscal.component').then(m => NotaFiscalComponent) //lazy loading
    },

    {
        path: 'produtos',
        loadComponent: () => import('./pages/produtos/produtos.component').then(m => ProdutosComponent) //lazy loading
    },
];
