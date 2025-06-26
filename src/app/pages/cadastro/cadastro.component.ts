import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cadastroForm: FormGroup;

   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required]
    }, {
      validators: this.validarSenhasIguais
    });
  }

  validarSenhasIguais(form: FormGroup) {
    const senha = form.get('senha')?.value;
    const confirmar = form.get('confirmarSenha')?.value;
    return senha === confirmar ? null: { senhasDiferentes: true };
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const { nome, email, senha } = this.cadastroForm.value;

      this.http.post('http://localhost:3000/usuarios', this.cadastroForm.value).subscribe(() => {
      alert('Cadastro realizado com sucesso!'); // msg q aparece qnd o usuario aperta no bt cadastrar
      this.router.navigate(['/']); // volta pra tela de login dps de cadastrar
      });
    } else if (this.cadastroForm.hasError('senhasDiferentes')) {
      alert('Senhas não são iguais.');
    }
  }
}
