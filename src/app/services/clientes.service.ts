import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrl!: string;

  constructor(private http: HttpClient, @Inject('apiUrl') _apiUrl: string) {
    this.apiUrl = _apiUrl;
  }

  public listado(): Observable<any> {
    return this.http.get(this.apiUrl + '/users');
  }

  delete(id) {
    return this.http.delete(this.apiUrl + '/users/' + id);
  }

  public update(body): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/users/' + body.id, body);
  }
}
