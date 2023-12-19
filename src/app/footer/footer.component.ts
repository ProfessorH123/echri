import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../users/user';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  user: User = new User();
  currentYear: number;

  constructor(
    private cookieService: CookieService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const token = this.cookieService.get('token');

    this.userService.getUserInfo(token).subscribe(
      (userInfo: any) => {
        this.user = userInfo;
      },
      (error) => {
        console.error(error);
      }
    );
    this.currentYear = new Date().getFullYear();
  }
}
