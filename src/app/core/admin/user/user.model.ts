import { Roles } from './roles.model';


export class User {
	id: string;
	email: string;
	displayName: string;
	roles: Roles;
	lastLogin: Date;
	modifiedAt: Date;
}
