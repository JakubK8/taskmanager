import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree
} from '@angular/router';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: FirebaseAuthService, private router: Router) {}

  async canActivate(): Promise<boolean | UrlTree> {
    const user = await this.authService.getCurrentUser();
    if (user) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}
