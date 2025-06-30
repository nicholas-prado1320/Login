import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ProdutosService } from '../../services/produtos.service';
import { Produtos } from '../../services/produtos.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    FloatLabelModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterLink,
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent {
  produto: Produtos = { codigo: '', descricao: '' };
  sidenavAberto = false;

  constructor(private produtosService: ProdutosService) {}

  confirmarProduto() {
    if (!this.produto.codigo || !this.produto.descricao) {
      alert('Preencha todos os campos!');
      return;
    }

    this.produtosService.cadastrar(this.produto).subscribe(() => {
      alert('Produto cadastrado com sucesso!');
      this.produto = { codigo: '', descricao: '' };
    });
  }
}
