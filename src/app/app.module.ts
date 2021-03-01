import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbInputModule, NbListModule, NbContextMenuModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FourOFourComponent } from './components/shared/four-o-four/four-o-four.component';
import { LoginComponent } from './components/shared/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './components/shared/header/header.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { RegisterComponent } from './components/shared/register/register.component';
import { AuthgardService } from './services/authgard.service';

@NgModule({
  declarations: [
    AppComponent,
    FourOFourComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbContextMenuModule, //pour l'uitlisation d'un boutton menu
    NbButtonModule,
    NbInputModule,
    NbListModule,
    FormsModule,
    NbListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule
  ],
  providers: [
    AuthService,
    AuthgardService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
