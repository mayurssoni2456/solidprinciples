import ICalculator from "./interfaces/calculator.interface";
import IProduct from "./interfaces/product.interface";

export default class InvoiceCalculator implements ICalculator {

    calculate(product: IProduct, quantity: number): number {
        return product.price * quantity;
    }
}