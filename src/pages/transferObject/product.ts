import { Manufacturer } from './manufacturer';
export class Product {
    productName : string;
    manufacturers : Manufacturer[];

    constructor () {
        this.manufacturers = new Array();
    }
}