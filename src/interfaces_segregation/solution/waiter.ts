
import IRestaurantWaiter from "./restaurantWaiter.interface";

/* Here we are not forcing classes to implement unwanted methods by segregating the methods
*/

export default class Waiter implements IRestaurantWaiter {
    serveCustomer(): void {
        console.log("Service food");
    }

}