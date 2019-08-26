import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Admin Components
import { ActivityLogComponent } from './core/admin/activity-log/activity-log.component';
import { SettingComponent } from './core/admin/setting/setting.component';
import { UserEditComponent } from './core/admin/user/user-edit/user-edit.component';
import { UserComponent } from './core/admin/user/user.component';

// Core Components
import { CustomerEditComponent } from './core/customer/customer-edit/customer-edit.component';
import { CustomerNewComponent } from './core/customer/customer-new/customer-new.component';
import { CustomerOverviewComponent } from './core/customer/customer-overview/customer-overview.component';
import { CustomerPaymentEditComponent } from './core/customer/customer-payment-edit/customer-payment-edit.component';
import { CustomerPaymentComponent } from './core/customer/customer-payment/customer-payment.component';
import { LoginComponent } from './core/login/login.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { ProductEditComponent } from './core/product/product-edit/product-edit.component';
import { ProductNewComponent } from './core/product/product-new/product-new.component';
import { ProductComponent } from './core/product/product.component';
import { ReportComponent } from './core/report/report.component';

import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		component: NavigationComponent,
		children: [
			{ path: '', component: CustomerOverviewComponent },
			{ path: 'newCustomer', component: CustomerNewComponent, canActivate: [AuthGuard] },
			{ path: 'editCustomer/:id', component: CustomerEditComponent, canActivate: [AuthGuard] },
			{ path: 'payment', component: CustomerPaymentComponent },
			{ path: 'editPayment', component: CustomerPaymentEditComponent, canActivate: [AuthGuard] },
			{ path: 'product', component: ProductComponent },
			{ path: 'newProduct', component: ProductNewComponent, canActivate: [AuthGuard] },
			{ path: 'editProduct/:id', component: ProductEditComponent, canActivate: [AuthGuard] },
			{ path: 'report', component: ReportComponent },
			{ path: 'log', component: ActivityLogComponent },
			{ path: 'setting', component: SettingComponent },
			{ path: 'user', component: UserComponent },
			{ path: 'editUser', component: UserEditComponent, canActivate: [AuthGuard] },
			{ path: '**', redirectTo: '', pathMatch: 'full' },
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [AuthGuard]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
	ActivityLogComponent,
	SettingComponent,
	UserComponent,
	UserEditComponent,
	CustomerEditComponent,
	CustomerNewComponent,
	CustomerOverviewComponent,
	CustomerPaymentComponent,
	CustomerPaymentEditComponent,
	LoginComponent,
	NavigationComponent,
	ProductComponent,
	ProductEditComponent,
	ProductNewComponent,
	ReportComponent
];
