import { CommonModule } from '@angular/common';
import { NgModule, ViewChild } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import {
	CovalentCommonModule,
	CovalentDialogsModule,
	CovalentLayoutModule,
	CovalentLoadingModule,
	CovalentMediaModule,
	CovalentMenuModule,
	CovalentNotificationsModule,
	CovalentSearchModule,
	CovalentStepsModule
} from '@covalent/core';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import { CovalentPagingModule } from '@covalent/core/paging';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { Guid } from 'guid-typescript';

import {
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatDatepickerModule,
	MatDialogModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatSelectModule,
	MatSidenavModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableDataSource,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule
} from '@angular/material';

const FLEX_LAYOUT_MODULES: any[] = [FlexLayoutModule];

const ANGULAR_MODULES: any[] = [FormsModule, ReactiveFormsModule];

const MATERIAL_MODULES: any[] = [
	MatButtonModule,
	MatCardModule,
	MatIconModule,
	MatListModule,
	MatMenuModule,
	MatTooltipModule,
	MatSlideToggleModule,
	MatInputModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatSnackBarModule,
	MatSidenavModule,
	MatTabsModule,
	MatSelectModule,
	MatTableModule,
	MatDatepickerModule,
	MatGridListModule,
	MatNativeDateModule
];

const COVALENT_MODULES: any[] = [
	CovalentDataTableModule,
	CovalentMediaModule,
	CovalentLoadingModule,
	CovalentNotificationsModule,
	CovalentLayoutModule,
	CovalentMenuModule,
	CovalentPagingModule,
	CovalentSearchModule,
	CovalentStepsModule,
	CovalentCommonModule,
	CovalentDialogsModule,
	CovalentMarkdownModule
];

@NgModule({
	imports: [
		CommonModule,
		ANGULAR_MODULES,
		MATERIAL_MODULES,
		COVALENT_MODULES,
		FLEX_LAYOUT_MODULES
	],
	declarations: [],
	exports: [
		ANGULAR_MODULES,
		MATERIAL_MODULES,
		COVALENT_MODULES,
		FLEX_LAYOUT_MODULES
	],
	providers: [MatDatepickerModule]
})
export class SharedModule { }
