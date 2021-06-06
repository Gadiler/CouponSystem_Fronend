import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/app/models/LoginDetails';
import { UserType } from 'src/app/models/UserType';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public logout(): void {
    const res = confirm("R U sure you want logout?");
    if (res) {
      this.authService.setToken('');
      this.authService.setUserType("None" as unknown as UserType);
      this.authService.logout();
      this.authService.login();
      this.router.navigateByUrl('')
    }
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public isLoggedOut(): boolean {
    return this.authService.isLoggedOut;
  }

  public getUserType(): string {
    return this.authService.getUserType().toString() ? this.authService.getUserType().toString() : "None";
  }

}
