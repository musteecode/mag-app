// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: 'AIzaSyAjRFWmzXoZ1SXDneOFAW-xXzuDDlk-bS0',
		authDomain: 'authapp-9d6e2.firebaseapp.com',
		databaseURL: 'https://authapp-9d6e2.firebaseio.com',
		projectId: 'authapp-9d6e2',
		storageBucket: 'authapp-9d6e2.appspot.com',
		messagingSenderId: '950301358147'
	}
};
