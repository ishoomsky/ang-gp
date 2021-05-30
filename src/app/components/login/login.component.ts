import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isPasswordHidden: boolean = true;
  focusedInput: string = null;
  isSubmitClicked = false;
  showLoginFailed = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  handleInputFocus(inputName: string): void {
    this.focusedInput = inputName;
  }

  handleVisibilityIconClick(): void {
    this.isPasswordHidden = !this.isPasswordHidden;
    this.focusedInput = 'password';
  }

  onSubmit(): void {
    this.isSubmitClicked = true;
    this.focusedInput = null;

    if (this.loginForm.valid) {
      this.authService.logIn(this.loginForm.value);

      if (this.authService.isLoggedIn()) {
        this.showLoginFailed = false;
        this.router.navigate(['/charts']);
      }

      if (this.authService.isLoggedIn() === false) {
        this.showLoginFailed = true;
        setTimeout(() => {
          this.showLoginFailed = false;
        }, 5000);
      }
    }
  }
}
