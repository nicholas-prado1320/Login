import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cadastroForm: FormGroup;

   constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
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

      this.usuarioService.cadastrar({ nome, email, senha }).subscribe(() => {
      alert('Cadastro realizado com sucesso!'); // msg q aparece qnd o usuario aperta no bt cadastrar
      this.router.navigate(['/']); // volta pra tela de login dps de cadastrar
      });
    } else if (this.cadastroForm.hasError('senhasDiferentes')) {
      alert('Senhas não são iguais.');
    }
  }
}
