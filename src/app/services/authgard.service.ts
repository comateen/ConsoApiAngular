import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgardService implements CanActivate {

  constructor(
    private _router : Router,
    private _authService : AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this._authService.currentUserValue;
    if (currentUser){
      return true;
    } else {
      //si on est pas log retour à la page de connexion
      this._router.navigate(['/signin']);
      return false;
    }

  }
}
