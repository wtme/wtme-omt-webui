import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private credentialsService: CredentialsService) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    const loginPayload = {
      usernameOrEmail: context.username,
      password: context.password,
      rememberMe: context.remember
    };

    return this.http
      .post('/api/auth/signin', loginPayload, { observe: 'response' })
      .pipe(map(authenticateSuccess.bind(this)));

    function authenticateSuccess(resp: any) {
      const jwt = resp.body.accessToken;
      const data = {
        username: context.username,
        token: jwt
      };
      this.credentialsService.setCredentials(data, context.remember);
      return data;
    }
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
