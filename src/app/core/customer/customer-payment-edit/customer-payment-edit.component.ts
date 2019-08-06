import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Intervall, Mahnstatus } from './../customer-payment/customer-payment.component';

@Component({
	selector: 'app-customer-payment-edit',
	templateUrl: './customer-payment-edit.component.html',
	styleUrls: ['./customer-payment-edit.component.scss']
})
export class CustomerPaymentEditComponent implements OnInit {

	constructor(
		private dialogRef: MatDialogRef<CustomerPaymentEditComponent>,
		private fb: FormBuilder,
		@Inject(MAT_DIALOG_DATA) private data: any) { }

	kundenzahlungForm: FormGroup;
	pipe = new DatePipe('de-CH');

	ngOnInit() {
		this.kundenzahlungForm = this.fb.group({
			$key: [this.data.id],
			betrag: [this.data.betrag],
			vertrag: [this.data.vertrag],
			kunde: [this.data.kunde],
			faelligkeit: [this.pipe.transform(this.data.faelligkeit, 'dd MMMM yyyy')],
			rechnungsbeschreibung: [this.data.rechnungsbeschreibung],
			intervall: [Intervall[this.data.intervall]],
			mahnstatus: [Mahnstatus[this.data.mahnstatus]],
			bezahltAm: ['', Validators.required],
			notiz: [this.data.notiz],
			mahnen: [this.data.mahnen]
		});
	}

	onCancel(updatedData?: any) {
		this.dialogRef.disableClose = false;
		this.dialogRef.close(updatedData);

		// this.service.form.reset();
		// this.service.initializeFormGroup();

		// this.dialogRef.disableClose = false;
		// this.dialogRef.close();
	}

	onSubmit() {
		if (this.kundenzahlungForm.valid) {
			this.onCancel(this.kundenzahlungForm.value);
		}
	}
}
