export class Left {
    _value;
    type = 'left';
    constructor(_value) {
        this._value = _value;
    }
    get value() {
        throw new Error('Tentou acessar Right em Left');
    }
    get error() {
        return this._value;
    }
    isException() {
        return true;
    }
    isSuccess() {
        return false;
    }
}
export class Right {
    _value;
    type = 'right';
    constructor(_value) {
        this._value = _value;
    }
    get value() {
        return this._value;
    }
    get error() {
        throw new Error('Tentou acessar Left em Right');
    }
    isException() {
        return false;
    }
    isSuccess() {
        return true;
    }
}
export const left = (value) => new Left(value);
export const right = (value) => new Right(value);
