import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SigninData } from '../interfaces/signin';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private signinUrl = `${environment.APP_URL}/login`;
  private http = inject(HttpClient)
  constructor() { }
  signin(signinData: SigninData) {
    return this.http.post(this.signinUrl, signinData);
  }
}
