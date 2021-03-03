import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthgardService } from 'src/app/services/authgard.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fg : FormGroup;
  errorMessage : string;

  constructor(
    private _builder: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.fg = this._builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required]
    });
  }

  onSubmit(){
    //si le formulaire n'estp as valide on arrête là et on reocmmence
    if(this.fg.invalid){
      return;
    }

    this._authService.register(this.fg.value)
        .subscribe({
          next:()=> {
            this._router.navigate(['/signin']);
          },
          error: error =>{
            this.errorMessage = error;
            console.log(this.errorMessage)
          }
        });
  }

}
