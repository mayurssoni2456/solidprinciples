import IPrinter from "./interfaces/printer.interface";
import Invoice from "./invoice";

export default class InvoicePrinter implements IPrinter {;

    // separte implementation for Print formatter can be implemented
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