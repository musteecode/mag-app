import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../admin/user/user.model';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthService {

	user: Observable<User>;

	constructor(
		private afAuth: AngularFireAuth,
		private afs: AngularFirestore,
		private router: Router) {

		// Get auth data, then get firestore user document || null
		this.user = this.afAuth.authState
			.switchMap(user => {
				if (user) {
					console.log(user);
					return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
				} else {
					return Observable.of(null);
				}
			});
	}

	emailLogin(email: string, password: string) {
		return this.afAuth.auth.signInWithEmailAndPassword(email, password)
			.then((credential) => {
				this.updateUserData(credential);
			})
			.catch(error => {
				console.log(error);
				throw error;
			});
	}

	private updateUserData(user: any) {
		// Sets user data to firestore on login
		const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
		const data: User = {
			id: user.uid,
			email: user.email,
			displayName: user.displayName,
			roles: { reader: true },
			lastLogin: new Date(Date.now()),
			modifiedAt: new Date(Date.now())
		};

		return userRef.set(data, { merge: true })
			.then(() => console.log(`user with Id ${user.uid} was updated successfully.`))
			.catch(err => console.log(err));
	}
}
