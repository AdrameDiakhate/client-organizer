import { Component, OnInit, inject } from '@angular/core';
import { SignupService } from './services/signup.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  providers: [SignupService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit  {  
  private signupService = inject(SignupService);
  signupForm: FormGroup;
  loading: boolean = false;
  private fb = inject(FormBuilder);
  private router = inject(Router);
  
  constructor() {
    this.signupForm = new FormGroup({});
  }
  

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loading=true;
    if (this.signupForm.valid) {
      this.signupService.signup(this.signupForm.value).subscribe(
        response => {
          this.loading=false;
          this.signupForm.reset();
          this.router.navigate(['/workspace']);
        },
        error => {
          console.error('Signup failed', error);
        }
      );
    }
  }

}
