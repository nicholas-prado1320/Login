import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor (private fb: FormBuilder, private router: Router, private usuarioService: UsuarioService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

onSubmit() {
  if (this.loginForm.valid) {
    const { email, senha } = this.loginForm.value;

    this.usuarioService.login(email, senha).subscribe(usuario => {
      if (usuario) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        this.router.navigate(['/home']);
      } else {
        alert('Usuário não cadastrado ou senha incorreta');
      }
    });
  }
}

}
