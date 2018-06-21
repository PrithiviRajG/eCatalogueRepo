import { Model } from './model';
export class Manufacturer {
    manufacturerName : string;
    models : Model[];

    constructor () {
        this.models = new Array();
    }
}