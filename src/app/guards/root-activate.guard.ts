// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from 'src/app/services/auth.service';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root',
// })
// export class RootActivateGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     if (this.authService.isLoggedIn()) {
//       this.router.navigate(['charts']);
//     }
//     if (!this.authService.isLoggedIn()) {
//       this.router.navigate(['login']);
//     }

//     return true;
//   }
// }
