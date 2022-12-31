import IRestaurantDishWasher from "./restaurantDishWasher.interface";

/* Here we are not forcing classes to implement unwanted methods by segregating the methods
*/
export default class DishWasher implements IRestaurantDishWasher {
    washDish(): void {
        console.log("Washing dishes");
    }
    
}