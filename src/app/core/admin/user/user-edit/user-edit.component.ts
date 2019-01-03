import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor() { }

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

  user: any
  states: string[] = ['Bern', 'Zürich']

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
