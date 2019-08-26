export class Roles {
	reader?: boolean;	// Read (default) | User
	author?: boolean;	// Create, Read, Update, Delete except UserManagement | Supervisor
	admin?: boolean;	// Unrestricted Access (CRUD) | Administrator
}
