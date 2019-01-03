import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PaymentService } from './../../services/payment.service';

@Component({
	selector: 'app-customer-payment-edit',
	templateUrl: './customer-payment-edit.component.html',
	styleUrls: ['./customer-payment-edit.component.scss']
})
export class CustomerPaymentEditComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<CustomerPaymentEditComponent>,
		private service: PaymentService) { }

	ngOnInit() {
	}

	onCancel() {
		this.service.form.reset();
		// this.dialogRef.close();
		// TODO: initialize default values on formGroup in Service here
	}
}
