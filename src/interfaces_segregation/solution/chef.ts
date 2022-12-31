import IRestaurantChef from "./restaurantChef.interface";

/* Here we are not forcing classes to implement unwanted methods by segregating the methods
*/
export default class Chef implements IRestaurantChef {
    cookFood(): void {
        console.log("Cooking food");
    }
    
}