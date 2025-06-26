import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor (private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

onSubmit() {
  if (this.loginForm.valid) {
    const { email, senha } = this.loginForm.value;

    this.http.get<any[]>('http://localhost:3000/usuarios').subscribe(usuarios => {
      const usuario = usuarios.find(u => u.email === email && u.senha === senha);
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
