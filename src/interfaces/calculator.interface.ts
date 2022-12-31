import IProduct from "./product.interface";

export default interface ICalculator {
    calculate(product: IProduct, quantity: number) : number;
}