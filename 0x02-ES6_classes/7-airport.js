export default class Airport{
    constructor(name, code){
        this._name = name
        this._code = code
    }

    set name(newName){
        if (typeof newName !== 'string'){
            throw new TypeError('Name must be a string')
        }
        this._name = newName
    }

    get name(){
        return this._name
    }

    set code(newCode){
        if (typeof newCode !== 'string'){
            throw new TypeError('Code must be a string')
        }
        this._code = newCode
    }

    get code(){
        return this._code
    }

    get [Symbol.toStringTag](){
        return this._code
    }
}
