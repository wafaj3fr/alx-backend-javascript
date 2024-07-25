import Currency from "./3-currency.js";

export default class Pricing{
    constructor(amount, currency){
        this._amount = amount;
        this._currency = currency;
    }

    set amount(newAmount){
        if (typeof newAmount !== 'number'){
            throw new TypeError('Amount must be a number');
        }
        this._amount = newAmount;
    }

    get amount(){
        return this._amount;
    }

    set currency(newCurrency){
        if (!(newCurrency instanceof Currency)){
            throw new TypeError('Currency must be a Currency');
        }
        this._currency = newCurrency;
    }

    get currency(){
        return this._currency;
    }

    displayFullPrice(){
        return `${this._amount} ${this._currency.displayFullCurrency()}`
    }

    static convertPrice(amount, conversionRate){
        if (typeof amount !== 'number'){
            throw new TypeError('Amount must be a number');
        }
        if (typeof conversionRate !== 'number'){
            throw new TypeError('Conversion rate must be a number');
        }
        return amount * conversionRate;
    }
}
