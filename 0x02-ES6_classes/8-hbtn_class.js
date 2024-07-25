export default class HolbertonClass{
    constructor(size, location){
        this._size = size
        this._location = location
    }
    set size(newSize){
        if (typeof newSize !== 'number'){
            throw new TypeError('Size must be a number')
        }
        this._size = newSize
    }
    get size(){
        return this._size
    }
    set location(newLocation){
        if (typeof newLocation !== 'string'){
            throw new TypeError('Location must be a string')
        }
        this._location = newLocation
    }
    get location(){
        return this._location
    }
    [Symbol.toPrimitive](hint){
        if (hint === 'number'){
            return this._size
        }
        if (hint === 'string'){
            return this._location
        }
        return this
    }
}
