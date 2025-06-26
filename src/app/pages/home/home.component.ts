import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Olá, {{ nomeUsuario }}</h2>`,
})
export class HomeComponent {
  nomeUsuario: string = '';

  constructor() {
    const dados = localStorage.getItem('usuarioLogado');
    if (dados) {
      this.nomeUsuario = JSON.parse(dados).nome;
    }
  }
}
