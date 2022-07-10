import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userLogged = this.AuthService.getUserLogged();

  constructor(private AuthService: AuthService, public router: Router) {}
  authService: any;

  ngOnInit(): void {}

  home() {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/portfolio']));
  }

  logout() {
    this.router.navigateByUrl('/iniciar-sesion');
    this.authService.logout();
  }
}
