import { Guid } from 'guid-typescript';
import { Contract } from './contract.model';
import { Customer } from './customer.model';
import { InvoiceStatus } from './invoice-status.enum';
import { Invoice } from './invoice.model';
import { Note } from './note.model';
import { PaymentCycle } from './payment-cycle.enum';
import { ReminderStatus } from './reminder-status.enum';

export class Payment {
	id: Guid;
	vertrag: Contract;
	kunde: Customer;
	rechnungsbeschreibung: Invoice;
	faelligkeit: Date;
	betrag: number;
	bezahltAm: Date;
	intervall: PaymentCycle;
	mahnstatus: ReminderStatus;
	rechnungsstatus: InvoiceStatus;
	notiz: Note;
	mahnen: boolean;
}
