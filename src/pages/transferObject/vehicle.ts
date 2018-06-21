import { Product } from './product';
export class Vehicle {
    vehicleName : string;
    product : Product;

    constructor () {
        this.product = new Product();
    }
    
}