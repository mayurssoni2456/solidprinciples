import IRestaurantEmployee from "./restaurantEmployee.interface";

export default class Chef implements IRestaurantEmployee {
    serveCustomer(): void {
        console.log("I dont serve food");
    }
    cookFood(): void {
        throw new Error("cooking food");
    }
    washDish(): void {
        throw new Error("It dont wash dishes");
    }
}