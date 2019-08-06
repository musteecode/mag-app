import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

interface Zahlung {
	id: string;
	bezahltAm: Date;
	notiz: string;
	mahnen: boolean;
}

@Injectable()
export class PaymentService {

	payment: Observable<Zahlung>;

	constructor(private afs: AngularFirestore) { }

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
		notiz: new FormControl('', Validators.maxLength(100)),
		mahnen: new FormControl({ value: false, disabled: false })
	});

	initializeFormGroup() {
		this.form.setValue({
			$key: null,
			vertrag: '',
			kunde: '',
			rechnungsbeschreibung: '',
			faelligkeit: '',
			betrag: '',
			intervall: '',
			mahnstatus: '',
			rechnungsstatus: '',
			bezahltAm: '',
			notiz: '',
			mahnen: false
		});
	}
}
