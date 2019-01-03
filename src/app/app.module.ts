import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule, Type } from '@angular/core';

import localeDeCh from '@angular/common/locales/de-CH';
registerLocaleData(localeDeCh);

import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { AppComponent } from './app.component';

import { AdminModule } from './core/admin/admin.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule, routedComponents } from './app-routing.module';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [AppComponent, routedComponents],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		AdminModule,
		CoreModule,
		SharedModule,
		CovalentHttpModule.forRoot(),
		CovalentHighlightModule,
		CovalentMarkdownModule,
		CovalentDynamicFormsModule
	],
	providers: [{ provide: LOCALE_ID, useValue: 'de-CH' }],
	bootstrap: [AppComponent]
})
export class AppModule { }
