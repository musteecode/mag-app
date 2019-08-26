// tslint:disable:no-submodule-imports
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from './../admin/user/user.model';

@Injectable()
export class UserService {

	constructor(private db: AngularFirestore) { }

	getUsers() {
		return this.db.collection('users').valueChanges();
	}
}
