import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  constructor() {}

  // logado
  login(): void {
    this.loggedIn = true;
    localStorage.setItem('token', 'fake-jwt-token'); // salva o token no localStorage
  }

  // logout
  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('token'); // remove o token
  }

  // verifica se o user está autenticado
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // se o token existir, retorna true
  }
}
