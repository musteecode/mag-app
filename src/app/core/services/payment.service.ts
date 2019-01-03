import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class PaymentService {

	constructor() { }

	form: FormGroup = new FormGroup({
		$key: new FormControl(null),
		vertrag: new FormControl({ value: '', disabled: true }),
		kunde: new FormControl({ value: '', disabled: true }),
		rechnungsbeschreibung: new FormControl({ value: '', disabled: true }),
		faelligkeit: new FormControl({ value: '', disabled: true }),
		betrag: new FormControl({ value: '', disabled: true }),
		intervall: new FormControl({ value: 0, disabled: true }),
		mahnstatus: new FormControl({ value: 0, disabled: true }),
		rechnungsstatus: new FormControl({ value: 0, disabled: true }),
		bezahltAm: new FormControl('', Validators.required),
		notiz: new FormControl('', Validators.maxLength(50))
	});
}
