import Building from "./5-building.js";

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors){
        super(sqft)
        this._floors = floors
    }
    set floors(newFloors){
        if (typeof newFloors !== 'number'){
            throw new TypeError('Floors must be a number')
        }
        this._floors = newFloors
    }
    get floors(){
        return this._floors
    }
    evacuationWarningMessage(){
        return `Evacuate slowly the ${this._floors} floors`
    }
}
