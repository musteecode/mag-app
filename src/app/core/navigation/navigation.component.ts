import { DatePipe } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import {
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	NgZone,
	ViewContainerRef
} from '@angular/core';

import {
	LoadingMode,
	LoadingType,
	TdDialogService,
	TdLoadingService,
	TdMediaService
} from '@covalent/core';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

	today: number;

	constructor(
		public media: TdMediaService,
		private router: Router,
		private route: ActivatedRoute,
		private loadingService: TdLoadingService,
		private dialogService: TdDialogService,
		private viewContainerRef: ViewContainerRef,
		private zone: NgZone,
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer,
	) {
		this.loadingService.create({
			name: 'loginScreen',
			mode: LoadingMode.Indeterminate,
			type: LoadingType.Linear,
			color: 'accent'
		});

		this.zone.run(() => {
			setInterval(() => {
				this.today = Date.now();
			}, 1);
		});

		this.matIconRegistry.addSvgIcon(
			'ribboncode',
			this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/ribboncode.svg')
		);
	}

	appName = 'MAG';
	appTitle = 'App';
	routes: object[] = [
		{
			icon: 'home',
			route: '/',
			title: 'Home'
		},
		{
			icon: 'color_lens',
			route: '.',
			title: 'App Style'
		},
		{
			icon: 'library_books',
			route: '.',
			title: 'Dokumentation'
		}
	];

	userMenu: object[] = [
		{
			icon: 'tune',
			route: '/profile',
			title: 'Profil Einstellungen'
		}
	];

	navMenu: object[] = [
		{
			icon: 'business',
			route: '/',
			title: 'Kunden Übersicht',
			description: 'Kontaktdaten | Allg. Infos'
		},
		{
			icon: 'timeline',
			route: '/payment',
			title: 'Kunden Zahlungen',
			description: 'Offene Rechnungen | Zahlungen'
		},
		{
			icon: 'camera',
			route: '/product',
			title: 'Produkte & Services',
			description: 'Kameras | Internet | Routers'
		},
		{
			icon: 'history',
			route: '/report',
			title: 'Berichte',
			description: 'Zahlungen | Produkte'
		}
	];

	adminMenu: object[] = [
		{
			icon: 'library_books',
			route: '/log',
			title: 'Verlauf',
			description: 'Protokollierung'
		},
		{
			icon: 'settings',
			route: '/setting',
			title: 'Einstellungen',
			description: 'Meldungen | Berichte'
		},
		{
			icon: 'people',
			route: '/user',
			title: 'Benutzerverwaltung',
			description: 'Rollen | Zugriffsrechte | Profile'
		}
	];

	openConfirm(): void {
		this.dialogService
			.openConfirm({
				message:
				'Du versuchst dich gerade abzumelden. Möchtest Du fortfahren?',
				disableClose: true,
				viewContainerRef: this.viewContainerRef,
				title: 'Abmelden',
				cancelButton: 'Abbrechen',
				acceptButton: 'Abmelden'
			})
			.afterClosed()
			.subscribe((accepted: boolean) => {
				if (accepted) {
					console.log('LogOff: accepted');
					this.logout();
				} else {
					console.log('LogOff: declined');
				}
			});
	}

	logout(): void {
		this.loadingService.register('loginScreen');

		setTimeout(() => {
			this.router.navigate(['/login']);
			this.loadingService.resolve();
		}, 2000);
	}
}
