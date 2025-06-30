import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Produtos {
  id?: string;
  codigo: string;
  descricao: string;
}

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private apiUrl = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  cadastrar(produto: Produtos): Observable<Produtos> {
    return this.http.post<Produtos>(this.apiUrl, produto);
  }
}
