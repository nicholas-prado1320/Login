import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {                                                         // classe que cuida tudo que for relacionado a usuarios
  private apiUrl = 'http://localhost:3000/usuarios';                                  // servidor onde guarda os dados dos usuarios -- invarued

  constructor(private http: HttpClient) { }                                           // leva e traz informações do json-server

  listar(): Observable<Usuario[]> {                                                   // Devolve a lista dos usuarios cadastrados
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {                                  // Cadastra um novo usuario no BD
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  login(email: string, senha: string): Observable<Usuario | undefined> {              // função de login
    return this.listar().pipe(                                                        // chamando a função listar() p/ pegar todos os usuarios
      map(usuarios => usuarios.find(u => u.email === email && u.senha === senha))     // Procura se tem alguem com mesmo email e senha, se encontrar, devolve o usuario.
                                                                                      // Se não encontrar, devolve 'undefined 

                                                                                      // ================================================================================
                                                                                      // resumo do uso do service: organiza o código e deixa os componentes mais limpos
    
    );
  }
}

