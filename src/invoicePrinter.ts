import IPrinter from "./interfaces/printer.interface";
import Invoice from "./invoice";

export default class InvoicePrinter implements IPrinter {;

    // we can also have a separte implementation for Print formatter 
    print(invoice: Invoice): void {
        console.log("=================================");
        console.log(`Product Name: ${invoice.product.name}`)
        console.log(`Product Price: ${invoice.product.price}`)
        console.log("=================================");
        console.log("=================================");
        console.log(`Total Bill: ${invoice.getPrice()}`);
        console.log("=================================");
    }
}