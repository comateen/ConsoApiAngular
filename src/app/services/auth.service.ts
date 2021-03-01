import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { NewUser } from '../models/newUser.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUserSubject : BehaviorSubject<User>;
  public currentUser : Observable<User>;

  constructor(
    private _client : HttpClient,
    private _router : Router
  ) {
    this._currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this._currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
      return this._currentUserSubject.value;
   }

  signIn(email : string, password : string){
        return this._client.post<any>(`${environment.apiUrl}/Auth/auth`, {email, password})
            .pipe(map(user => {
              //je récup!re les détails et le token dans un local storage pour garder l'utilisateur connecté en deux refresh de la page
              localStorage.setItem('currentUser', JSON.stringify(user));
              this._currentUserSubject.next(user);
              console.log(user);
              return user;
            }));
  }

  signOut(){
    //je retire l'utilisateur du local storage
    localStorage.removeItem('currentUser');
    this._currentUserSubject.next(null);
    this._router.navigate(['signin']);
  }

  register(user: NewUser){
    return this._client.post(`${environment.apiUrl}/User/register`, user)
  }

  
}
