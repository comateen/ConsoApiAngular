import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items : NbMenuItem[]
  isAuth : boolean;
  
  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
    const currentUser = this._authService.currentUserValue;
    if(currentUser){
      this.isAuth = true; 
    } else {
      this.isAuth = false;
    }
    this.items = [
      { link : '/home', title:"Home", icon:'home'}
    ]
  }

}
