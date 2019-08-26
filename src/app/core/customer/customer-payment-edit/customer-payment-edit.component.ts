// tslint:disable:no-submodule-imports
import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

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
			betrag: [{ value: this.data.betrag, disabled: true }],
			vertrag: [{ value: this.data.vertrag, disabled: true }],
			kunde: [{ value: this.data.kunde, disabled: true }],
			faelligkeit: [{ value: this.pipe.transform(this.data.faelligkeit, 'dd MMMM yyyy'), disabled: true }],
			rechnungsbeschreibung: [{ value: this.data.rechnungsbeschreibung, disabled: true }],
			intervall: [{ value: this.data.intervall, disabled: true }],
			mahnstatus: [{ value: this.data.mahnstatus, disabled: true }],
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
