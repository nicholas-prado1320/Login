import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  nomeUsuario: string = '';

  constructor(private dialog: MatDialog, private router: Router) {
    const dados = localStorage.getItem('usuarioLogado');
    if (dados) {
      this.nomeUsuario = JSON.parse(dados).nome;
    }
  }

  logout() {
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['']);
  }

  sidenavAberto = false;

  sair() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = '/';
  }
}
