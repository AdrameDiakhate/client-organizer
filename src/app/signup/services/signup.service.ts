import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signupUrl = `${environment.APP_URL}/register`;
  private http = inject(HttpClient);

  constructor() { }
  signup(userData: User): Observable<any> {
    return this.http.post(this.signupUrl, userData);
  }
}
