import Bike from "./bike.interface";

export default class MotorCycle implements Bike {
    turnOnEngine(): void {
        console.log("Engine Turned on");
    }
    accelerate(): void {
        console.log("Accelerating");
    }   
}