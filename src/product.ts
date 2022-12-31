
import IProduct from "./interfaces/product.interface";
import { TProduct } from "./types/tproduct";

export default class Product implements IProduct{
    name: string;
    color: string;
    price: number;

    constructor(product: TProduct) {
        this.name = product.name;
        this.color = product.color;
        this.price = product.price;
    }

    
}