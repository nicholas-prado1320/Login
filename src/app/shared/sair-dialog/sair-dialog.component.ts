import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-sair-dialog',
  standalone: true,
  templateUrl: './sair-dialog.component.html',
  styleUrls: ['./sair-dialog.component.scss'],
  imports: [CommonModule, MatButtonModule, MatDialogModule]
})
export class SairDialogComponent {
  constructor(private dialogRef: MatDialogRef<SairDialogComponent>) {}

  confirmar() {
    localStorage.removeItem('usuarioLogado');
    this.dialogRef.close();
    window.location.href = '/'; // ou this.router.navigate(['/']);
  }
}
