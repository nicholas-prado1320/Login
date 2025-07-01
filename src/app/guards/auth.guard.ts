import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const snackbar = inject(MatSnackBar);

  if (typeof window === 'undefined') {
    return false;
  }

  const usuarioLogado = typeof window !== 'undefined' && !!localStorage.getItem('usuarioLogado');

  if (usuarioLogado) {
    return true;
  } else {
    snackbar.open('⚠️Faça login antes de acessar essa página.', 'Fechar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    router.navigate(['']);
    return false;
  }
};
