import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isAuth : boolean;
  

  constructor(private _authService : AuthService) { }

  ngOnInit(){
    const currentUser = this._authService.currentUserValue;
    if(currentUser){
      this.isAuth = true; 
    } else {
      this.isAuth = false;
    }
  }



  onSignOut(){
    this._authService.signOut();
  }

}
