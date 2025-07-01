import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NotaFiscalService } from '../../services/nota-fiscal.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PrimeNG } from 'primeng/config';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-nota-fiscal',
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    FloatLabelModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    MatDividerModule,
    RouterLink,
  ],
  templateUrl: './nota-fiscal.component.html',
  styleUrls: ['./nota-fiscal.component.scss'],
})
export class NotaFiscalComponent {
  numeroNota: string = '';


  constructor(
    private notaService: NotaFiscalService,
    private primeng: PrimeNG
  ) {}

  confirmarNota() {
    if (!this.numeroNota)
      return alert('Informe o número da nota antes de gravar!');

    this.notaService.cadastrar({ numero: this.numeroNota }).subscribe(() => {
      alert('Nota fiscal cadastrada com sucesso!');
      this.numeroNota = '';
    });
  }
  sidenavAberto = false;
}
