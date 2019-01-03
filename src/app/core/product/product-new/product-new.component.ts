import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {

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
