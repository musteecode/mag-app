
import {tap, map, take} from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';




@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private auth: AuthService, private router: Router) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		return this.auth.user.pipe(
			take(1),
			map(user => !!user),
			tap(loggedIn => {
				if (!loggedIn) {
					console.log('zugriff verweigert');
					this.router.navigate(['/login']);
				}
			}),);
	}
}
