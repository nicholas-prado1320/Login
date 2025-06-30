import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface NotaFiscal {
  id?: number;
  numero: string;
}

@Injectable({ providedIn: 'root' })

export class NotaFiscalService {
  private apiUrl = 'http://localhost:3000/nota-fiscal';

  constructor(private http: HttpClient) { }

  cadastrar(nota: NotaFiscal): Observable<NotaFiscal> {
    return this.http.post<NotaFiscal>(this.apiUrl, nota);
  }
}
