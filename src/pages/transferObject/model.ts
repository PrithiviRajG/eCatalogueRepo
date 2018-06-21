import { Equipment } from './equipment';
export class Model {
    modelName : string;
    equipments : Equipment[];

    constructor () {
        this.equipments = new Array();
    }
}