import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-customer-edit',
	templateUrl: './customer-edit.component.html',
	styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

	constructor(public dialogRef: MatDialogRef<CustomerEditComponent>) { }

	onSubmit() {
		this.onClose();
	}

	onCancel() {
		this.onClose();
	}

	private onClose() {
		this.dialogRef.close();
	}

	routes: Object[] = [{
		icon: 'dashboard',
		route: '.',
		title: 'Dashboard',
	}, {
		icon: 'library_books',
		route: '.',
		title: 'Documentation',
	}, {
		icon: 'build',
		route: '.',
		title: 'Console',
	}];

	user: any;

	states: string[] = ['Bern', 'Zürich'];

	ngOnInit() {
		this.user = {
			name: {
				first: '',
				last: '',
			},
			email: '',
			nickname: '',
			address: {
				street: '',
				street2: '',
				city: '',
				state: '',
				postcode: '',
			}
		};
	}

}
