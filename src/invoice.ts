import ICalculator from "./interfaces/calculator.interface";
import IProduct from "./interfaces/product.interface";

export default class Invoice {
    public product: IProduct;
    private calculator: ICalculator;
    public quantity: number;

    constructor(product: IProduct, calculator: ICalculator, quanity: number) {
        this.product = product;
        this.calculator = calculator;
        this.quantity = quanity;
    }

    public getPrice(): number{
        let price: number = this.calculator.calculate(this.product, this.quantity);
        return price;
    }

}