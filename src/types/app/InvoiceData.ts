import type { InvoiceItem } from "./InvoiceItem";

export interface InvoiceData {
    from: string;
    to: string;
    address: string;
    date: string;
    invoiceNumber: string;
    items: InvoiceItem[];
    notes: string;
    subtotal: number;
    tax: number;
    total: number;
}
