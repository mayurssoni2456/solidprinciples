import Bike from "./bike.interface";

export default class Cycle implements Bike {

    /* here we are breaking rule of Liscov 
    - If I pass intance of Cycle the system will throw error
    - behaviour of MotorCycle and Cycle object is not the same
    - subsclass should not narrow down the functionality
    */
    turnOnEngine(): void {
        console.log("Cycle does not have engine - throwing error");
    }
    accelerate(): void {
        console.log("Accelerating");
    }   
}