import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from './services/signin.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  private signinService =inject(SigninService);
  signinForm: FormGroup;
  loading: boolean = false;
  private fb = inject(FormBuilder);
  private router = inject(Router);

  constructor() { 
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      this.loading=true;
      this.signinService.signin(this.signinForm.value).subscribe(
        (response)=>{
          this.loading=false;
          this.router.navigate(['/workspace']);
        },
        error => {
          console.error('Signup failed', error);
        }
      )
    }
  }
}
