import { DatePipe, Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material';
import { TdDialogService } from '@covalent/core';
import {
	ITdDataTableColumn,
	ITdDataTableSortChangeEvent,
	TdDataTableService,
	TdDataTableSortingOrder
} from '@covalent/core/data-table';

import { IPageChangeEvent } from '@covalent/core/paging';
import { CustomerPaymentEditComponent } from "app/core/customer/customer-payment-edit/customer-payment-edit.component";
import * as mock from 'faker';
import { Guid } from 'guid-typescript';

const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);
const DATE_FORMAT: (v: any) => any = (v: Date) => v.toDateString();

export enum Rechnungsstatus {
	NichtFaellig,
	Bezahlt,
	Ausstehend
}

export enum Mahnstatus {
	NichtGemahnt,
	Stufe1,
	Stufe2,
	Stufe3,
	ServiceEingestellt
}

export enum Intervall {
	Monatlich,
	Halbjaehrlich,
	Jaehrlich
}

export interface IPayment {
	id: Guid;
	vertrag: string;
	kunde: string;
	rechnungsbeschreibung: string;
	faelligkeit: Date;
	betrag: number;
	bezahltAm: Date;
	intervall: string;
	mahnstatus: Mahnstatus;
	rechnungsstatus: Rechnungsstatus;
	notiz: string;
}

const PAYMENT_DATA: IPayment[] = [
	{
		id: Guid.create(),
		vertrag: '81385',
		rechnungsbeschreibung: 'On the fly analytics',
		kunde: 'Abu Asiyah',
		faelligkeit: new Date('12/15/15, 8:00 PM'),
		bezahltAm: new Date('12/15/17, 11:00 PM'),
		rechnungsstatus: Rechnungsstatus.Bezahlt,
		intervall: 'Jährlich',
		betrag: 375.50,
		mahnstatus: Mahnstatus.NichtGemahnt,
		notiz: ''
	},
	{
		id: Guid.create(),
		vertrag: '27303',
		rechnungsbeschreibung: 'Optimistic Binding C#',
		kunde: 'Abu Hureira',
		faelligkeit: new Date('09/15/14, 4:00 AM'),
		bezahltAm: new Date('10/15/16, 2:00 AM'),
		rechnungsstatus: Rechnungsstatus.NichtFaellig,
		intervall: 'Jährlich',
		betrag: 400.50,
		mahnstatus: Mahnstatus.NichtGemahnt,
		notiz: ''
	},
	{
		id: Guid.create(),
		vertrag: '58646',
		rechnungsbeschreibung: 'Yes On the go & While',
		kunde: 'Bilal Adhaan',
		faelligkeit: new Date('12/15/15, 8:00 PM'),
		bezahltAm: new Date('12/15/17, 11:00 PM'),
		rechnungsstatus: Rechnungsstatus.Ausstehend,
		intervall: 'Monatlich',
		betrag: 98.50,
		mahnstatus: Mahnstatus.Stufe2,
		notiz: ''
	},
	{
		id: Guid.create(),
		vertrag: '83796',
		rechnungsbeschreibung: 'Injection over Composition',
		kunde: 'Gauda',
		faelligkeit: new Date('1/18/11, 1:00 PM'),
		bezahltAm: new Date('12/14/14, 5:00 AM'),
		rechnungsstatus: Rechnungsstatus.Bezahlt,
		intervall: 'Monatlich',
		betrag: 112.50,
		mahnstatus: Mahnstatus.NichtGemahnt,
		notiz: ''
	},
	{
		id: Guid.create(),
		vertrag: '71470',
		rechnungsbeschreibung: 'Direct Engine Control',
		kunde: 'Atilla Gökcegün',
		faelligkeit: new Date('3/4/10, 11:00 AM'),
		bezahltAm: new Date('2/5/17, 7:00 PM'),
		rechnungsstatus: Rechnungsstatus.Ausstehend,
		intervall: 'Monatlich',
		betrag: 65.50,
		mahnstatus: Mahnstatus.Stufe3,
		notiz: ''
	},
	{
		id: Guid.create(),
		vertrag: '71300',
		rechnungsbeschreibung: 'Domain Driven',
		kunde: 'Cengiz Gökcegün',
		faelligkeit: new Date('3/4/10, 11:00 AM'),
		bezahltAm: new Date('2/5/17, 7:00 PM'),
		rechnungsstatus: Rechnungsstatus.Ausstehend,
		intervall: 'Monatlich',
		betrag: 65.50,
		mahnstatus: Mahnstatus.Stufe1,
		notiz: ''
	},
	{
		id: Guid.create(),
		vertrag: '91470',
		rechnungsbeschreibung: 'Angular Material',
		kunde: 'Good Luck',
		faelligkeit: new Date('3/4/10, 11:00 AM'),
		bezahltAm: new Date('2/5/17, 7:00 PM'),
		rechnungsstatus: Rechnungsstatus.NichtFaellig,
		intervall: 'Jährlich',
		betrag: 665.50,
		mahnstatus: Mahnstatus.NichtGemahnt,
		notiz: ''
	},
	{
		id: Guid.create(),
		vertrag: '31470',
		rechnungsbeschreibung: 'Reverse Engineering',
		kunde: 'Knüppel Muster',
		faelligkeit: new Date('3/4/10, 11:00 AM'),
		bezahltAm: new Date('2/5/17, 7:00 PM'),
		rechnungsstatus: Rechnungsstatus.Ausstehend,
		intervall: 'Halbjährlich',
		betrag: 235.50,
		mahnstatus: Mahnstatus.Stufe1,
		notiz: ''
	},
	{
		id: Guid.create(),
		vertrag: '32470',
		rechnungsbeschreibung: 'Test Driven',
		kunde: 'Abu Muster',
		faelligkeit: new Date('3/4/10, 11:00 AM'),
		bezahltAm: new Date('2/5/17, 7:00 PM'),
		rechnungsstatus: Rechnungsstatus.Bezahlt,
		intervall: 'Jährlich',
		betrag: 465.50,
		mahnstatus: Mahnstatus.NichtGemahnt,
		notiz: ''
	},
	{
		id: Guid.create(),
		vertrag: '12410',
		rechnungsbeschreibung: 'Repository Pattern',
		kunde: 'Ibn Ahmad',
		faelligkeit: new Date('3/4/10, 11:00 AM'),
		bezahltAm: new Date('2/5/17, 7:00 PM'),
		rechnungsstatus: Rechnungsstatus.Ausstehend,
		intervall: 'Halbjährlich',
		betrag: 188.90,
		mahnstatus: Mahnstatus.Stufe1,
		notiz: ''
	},
];

@Component({
	selector: 'app-customer-payment',
	templateUrl: './customer-payment.component.html',
	styleUrls: ['./customer-payment.component.scss']
})

export class CustomerPaymentComponent {

	columns: ITdDataTableColumn[] = [
		// { name: 'vertrag',  label: 'Vertrag', filter: true, sortable: true },
		{ name: 'kunde', label: 'Kunde', filter: true, sortable: true },
		{ name: 'rechnungsbeschreibung', label: 'Rechnung', width: 280 },
		{ name: 'faelligkeit', label: 'Fälligkeit', format: DATE_FORMAT },
		{ name: 'betrag', label: 'Betrag', filter: true, numeric: true, format: DECIMAL_FORMAT },
		// { name: 'bezahltAm', label: 'BezahltAm', width: 170, format: DATE_FORMAT },
		// { name: 'intervall', label: 'Intervall' },
		{ name: 'mahnstatus', label: 'Mahnung', width: 80 },
		{ name: 'rechnungsstatus', label: 'Status', width: 80 },
		{ name: 'notiz', label: 'Notiz', hidden: true },
		{ name: 'aktion', label: '', filter: false, sortable: false, width: 390 },
	];

	private mahnstatus = Mahnstatus;
	private rechnungsstatus = Rechnungsstatus;

	data: any[] = PAYMENT_DATA;

	filteredData: any[] = this.data;
	filteredTotal: number = this.data.length;

	searchTerm = '';
	fromRow = 1;
	currentPage = 1;
	pageSize = 10;
	sortBy = 'faelligkeit';
	selectedRows: any[] = [];
	sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
	clickable = true;

	constructor(
		private location: Location,
		private dataTableService: TdDataTableService,
		private dialogService: TdDialogService) { }

	ngOnInit(): void {
		this.filter();
	}

	navigateBack() {
		this.location.back();
	}

	changeInvoiceStatus(row: any, name: string): void {
		this.dialogService.openPrompt({
			message: 'Notiz erfassen?',
			value: row[name],
		}).afterClosed().subscribe((value: any) => {
			if (value !== undefined) {
				row[name] = value;
			}
		});
	}

	sendReminder(row: any, name: string): void {
		this.dialogService.openPrompt({
			message: 'Notiz erfassen?',
			value: row[name],
		}).afterClosed().subscribe((value: any) => {
			if (value !== undefined) {
				row[name] = value;
			}
		});
	}

	addComment(row: any, name: string): void {
		this.dialogService.openPrompt({
			message: 'Notiz erfassen?',
			value: row[name],
		}).afterClosed().subscribe((value: any) => {
			if (value !== undefined) {
				row[name] = value;
			}
		});
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

	onClick(event: any): void {
		const row: any = event.row;
		console.log(row);
	}

	onEdit(event: any): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.width = '55%';

		this.dialogService.open(CustomerPaymentEditComponent, dialogConfig);
	}

	filter(): void {
		let newData: any[] = this.data;
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