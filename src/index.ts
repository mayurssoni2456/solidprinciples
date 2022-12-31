// create product
// generate Invoice

import Product from "./product";
import Invoice from "./invoice";
import InvoiceCalculator from "./invoiceCalculator";
import { TProduct } from "./types/tproduct";
import InvoicePrinter from "./invoicePrinter";

// step 1 
const markerObj: TProduct = {
    name: "marker",
    price: 100,
    color: "blue"
}

// step 2 - create calculator 
const calculator = new InvoiceCalculator();

// step 3 - create Product
const marker = new Product(markerObj);

// step 4 - generate Invoice
const invoice = new Invoice(marker,calculator,10);

// step 5 - print invoice
const printer = new InvoicePrinter();
printer.print(invoice);

