// tslint:disable:no-submodule-imports
import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material';
import { TdDialogService } from '@covalent/core';
import {
	ITdDataTableColumn,
	ITdDataTableSortChangeEvent,
	TdDataTableService,
	TdDataTableSortingOrder
} from '@covalent/core/data-table';
import { IPageChangeEvent } from '@covalent/core/paging';
import { UserService } from './../../services/user.service';
import { UserEditComponent } from './user-edit/user-edit.component';
import { User } from './user.model';

const DATE_FORMAT: (v: any) => any = (v: Date) => v.toDateString();

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
	columns: ITdDataTableColumn[] = [
		{ name: 'id', label: 'Id', hidden: true },
		{ name: 'displayName', label: 'Name', filter: true, sortable: true },
		{ name: 'email', label: 'EMail' },
		{ name: 'roles', label: 'Rollen' },
		{ name: 'lastLogin', label: 'Letzter Login', format: DATE_FORMAT },
		{ name: 'modifiedAt', label: 'Letzte Aktualisierung', format: DATE_FORMAT },
		{ name: 'createdAt', label: 'Erstellt', format: DATE_FORMAT },
		{ name: 'aktion', label: 'Aktion', filter: false, sortable: false },
	];

	users: any;

	filteredData: any; // = this.users;
	filteredTotal: number; // = this.users.length;
	searchTerm = '';
	fromRow = 1;
	currentPage = 1;
	pageSize = 10;
	sortBy = 'displayName';
	selectedRows: any[] = [];
	sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
	clickable = true;

	constructor(
		private location: Location,
		private dataTableService: TdDataTableService,
		private dialogService: TdDialogService,
		private userService: UserService) { }

	ngOnInit() {
		this.userService.getUsers()
			.subscribe((result: any) => {
				this.users = result;
				this.filteredData = this.users;
				this.filteredTotal = this.users.length;
				console.log(result);
			});
	}

	getRoles(data: any) {
		let roles: string;
		if (data.reader) {
			roles = 'Standardbenutzer';
		}
		if (data.author) {
			roles = 'Superbenutzer';
		}
		if (data.admin) {
			roles = 'Administrator';
		}

		return roles;
	}

	onCreate() {
		this.openDialog(null);
	}

	onEdit(selectedRow: any) {
		console.log(selectedRow);
	}

	// onEdit(row: any): void {
	// 	this.openDialog(row);
	// }

	openDialog(data: any) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.width = '55%';
		dialogConfig.data = data;

		const dialogRef = this.dialogService.open(UserEditComponent, dialogConfig);
		dialogRef.beforeClose().subscribe(result => {
			if (result) {
				console.log('following updates were requested');
				console.log(result);
			} else {
				console.log('nothing to update');
			}
		});
	}

	navigateBack() {
		this.location.back();
	}

	sort(sortEvent: ITdDataTableSortChangeEvent): void {
		this.sortBy = sortEvent.name;
		this.sortOrder = sortEvent.order;
		this.filter();
	}

	search(searchTerm: string): void {
		this.searchTerm = searchTerm;
		this.filter();
		console.log(searchTerm);
	}

	page(pagingEvent: IPageChangeEvent): void {
		this.fromRow = pagingEvent.fromRow;
		this.currentPage = pagingEvent.page;
		this.pageSize = pagingEvent.pageSize;
		this.filter();
	}

	filter(): void {
		let newData: any[] = this.users;
		const excludedColumns: string[] = this.columns
			.filter((column: ITdDataTableColumn) => {
				return ((column.filter === undefined && column.hidden === true) ||
					(column.filter !== undefined && column.filter === false));
			}).map((column: ITdDataTableColumn) => {
				return column.name;
			});

		newData = this.dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
		this.filteredTotal = newData.length;

		newData = this.dataTableService.sortData(newData, this.sortBy, this.sortOrder);
		newData = this.dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);

		this.filteredData = newData;
	}
}
