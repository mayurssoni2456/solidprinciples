import IRestaurantEmployee from "./restaurantEmployee.interface";

export default class DishWasher implements IRestaurantEmployee {
    serveCustomer(): void {
        console.log("I dont serve food");
    }
    cookFood(): void {
        throw new Error("I dont cook food");
    }
    washDish(): void {
        throw new Error("Washing dishes");
    }
}