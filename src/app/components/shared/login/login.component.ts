import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg : FormGroup;
  errorMessage : string;

  constructor(
    private _authService : AuthService,
    private _builder : FormBuilder,
    private _router : Router
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.fg = this._builder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    })
  }

  onSubmit(){
    const email = this.fg.get('email').value;
    const password = this.fg.get('password').value;

    this._authService.signIn(email, password).subscribe(
      data => {
        this._router.navigate(['home']);
      },
      error => { 
        this.errorMessage = error;
      }
    );
  }

}
