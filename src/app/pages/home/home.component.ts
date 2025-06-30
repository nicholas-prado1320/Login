import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SairDialogComponent } from '../../shared/sair-dialog/sair-dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    SairDialogComponent,
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

  constructor(private dialog: MatDialog) {
    const dados = localStorage.getItem('usuarioLogado');
    if (dados) {
      this.nomeUsuario = JSON.parse(dados).nome;
    }
  }

  abrirDialogoSair() {
    this.dialog.open(SairDialogComponent);
  }

  sidenavAberto = false;

  sair() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = '/';
  }
}
