import { Guid } from 'guid-typescript';
import { Roles } from './roles.model';

export class User {
	id: Guid;
	email: string;
	displayName: string;
	roles: Roles;
	lastLogin?: Date;
	modifiedAt?: Date;
	createdAt: Date;
}
