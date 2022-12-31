
import IRestaurantEmployee from "./restaurantEmployee.interface";

export default class Waiter implements IRestaurantEmployee {
    serveCustomer(): void {
        console.log("Serving food");
    }
    cookFood(): void {
        throw new Error("I dont cook food");
    }
    washDish(): void {
        throw new Error("It dont wash dishes");
    }
}