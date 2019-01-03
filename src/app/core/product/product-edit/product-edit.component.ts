import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

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
