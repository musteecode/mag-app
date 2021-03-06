// tslint:disable:no-submodule-imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { CustomerService } from './services/customer.service';
import { PaymentService } from './services/payment.service';
import { ProductService } from './services/product.service';
import { ReminderService } from './services/reminder.service';
import { SettingService } from './services/setting.service';
import { UserService } from './services/user.service';

import { environment } from 'environments/environment';
export const firebaseConfig = environment.firebase;
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireFunctions } from 'angularfire2/functions';

@NgModule({
	imports: [
		CommonModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFirestoreModule,
		AngularFireAuthModule
	],
	declarations: [],
	providers: [
		AuthService,
		CustomerService,
		PaymentService,
		ProductService,
		SettingService,
		UserService,
		ReminderService,
		AngularFireFunctions
	]
})

export class CoreModule { }
