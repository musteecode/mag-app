import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import {
	LoadingMode,
	LoadingStrategy,
	LoadingType,
	TdLoadingService,
	TdDialogService,
	TdFadeInOutAnimation
} from '@covalent/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [TdFadeInOutAnimation({ duration: 600, delay: 200 })]
})

export class LoginComponent {
	userNameMaxLength = 40;
	username: string;
	password: string;
	error: any;

	constructor(
		private auth: AuthService,
		private router: Router,
		private loadingService: TdLoadingService,
		private dialogService: TdDialogService,
		private viewContainerRef: ViewContainerRef
	) {
		this.loadingService.create({
			name: 'loginScreen',
			mode: LoadingMode.Indeterminate,
			type: LoadingType.Linear,
			color: 'accent'
		});
	}

	login(): void {
		this.loadingService.register('loginScreen');
		this.auth.emailLogin(this.username, this.password)
			.then(() => {
				this.router.navigate(['/']);
				this.loadingService.resolve();
			})
			.catch(error => {
				this.loadingService.resolve('loginScreen');
				this.error = error;
			});
	}

	clearError(input: HTMLInputElement) {
		this.error = null;
		input.select();
	}

	signUp(): void {
		this.loadingService.register('loginScreen');

		setTimeout(() => {
			this.router.navigate(['/']);
			this.loadingService.resolve();
		}, 2000);
	}
}
