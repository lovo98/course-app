import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogged = new BehaviorSubject<boolean>(false);
  public userLogged$ = this.isUserLogged.asObservable();
  apiUrl!: string;

  constructor(@Inject('apiUrl') _apiUrl: string, private httpClient: HttpClient,
  ) {
    this.apiUrl = _apiUrl;
  }

  set userLogged(isUserLogged: boolean) {
    this.isUserLogged.next(isUserLogged);
  }

  login(loginForm: any) {
    return this.httpClient.post(this.apiUrl + '/login', loginForm)
      .pipe(
        take(1),
        map((response: any) => {
          this.isUserLogged.next(true);
          localStorage.setItem('token', response.accessToken);
          return response;
      }));
  }

  registerClient(value) {
    return this.httpClient.post(this.apiUrl + '/register', value);
  }
}
