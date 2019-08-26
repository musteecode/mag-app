// tslint:disable:no-submodule-imports
import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Guid } from 'guid-typescript';
import { CustomValidators } from './../../../../shared/custom-validators';

@Component({
	selector: 'app-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

	public userForm: FormGroup;
	public formTitle: string;
	public roles: string[] = ['Standardbenutzer', 'Superuser', 'Administrator'];
	public selectedRole: any;

	// pipe = new DatePipe('de-CH');

	constructor(
		private dialogRef: MatDialogRef<UserEditComponent>,
		private fb: FormBuilder,
		@Inject(MAT_DIALOG_DATA) private data?: any) { }

	ngOnInit() {
		this.userForm = this.data ? this.buildEditUserForm() : this.buildCreateUserForm();
	}

	buildCreateUserForm(): FormGroup {
		this.formTitle = 'Neuer Benutzer';
		return this.fb.group({
			$key: Guid.create(),
			name: ['', Validators.required],
			lastname: ['', Validators.required],
			email: ['', Validators.compose([
				Validators.email,
				Validators.required
			])],
			password: ['', Validators.compose([
				Validators.required,
				CustomValidators.patternValidator(/\d/, {
					hasNumber: true
				}),
				CustomValidators.patternValidator(/[A-Z]/, {
					hasCapitalCase: true
				}),
				CustomValidators.patternValidator(/[a-z]/, {
					hasSmallCase: true
				}),
				CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
					hasSpecialCharacters: true
				}
				),
				Validators.minLength(8)
			])
			],
			confirmPassword: [null, Validators.compose([Validators.required])],
			role: ['', Validators.required]
		},
			{
				validator: CustomValidators.passwordMatchValidator
			});
	}

	buildEditUserForm(): FormGroup {
		this.formTitle = 'Benutzer bearbeiten';
		return this.fb.group({

		});
	}

	onCancel(updatedData?: any) {
		this.dialogRef.disableClose = false;
		this.dialogRef.close(updatedData);
	}

	onSubmit() {
		if (this.userForm.valid) {
			this.onCancel(this.userForm.value);
		}
	}

	// ngOnInit() {
	// 	this.userForm = this.fb.group({
	// 		$key: [this.data.id],
	// 		betrag: [{ value: this.data.betrag, disabled: true }],
	// 		vertrag: [{ value: this.data.vertrag, disabled: true }],
	// 		kunde: [{ value: this.data.kunde, disabled: true }],
	// 		faelligkeit: [{ value: this.pipe.transform(this.data.faelligkeit, 'dd MMMM yyyy'), disabled: true }],
	// 		rechnungsbeschreibung: [{ value: this.data.rechnungsbeschreibung, disabled: true }],
	// 		intervall: [{ value: this.data.intervall, disabled: true }],
	// 		mahnstatus: [{ value: this.data.mahnstatus, disabled: true }],
	// 		bezahltAm: ['', Validators.required],
	// 		notiz: [this.data.notiz],
	// 		mahnen: [this.data.mahnen]
	// 	});
	// }
}
