export class BirthDate {
    value;
    constructor(date) {
        if (!date) {
            throw new Error('Data de nascimento obrigatória');
        }
        if (!this.isAdult(date)) {
            throw new Error('É necessário ser maior de 18 anos');
        }
        this.value = date;
    }
    isAdult(date) {
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear() -
            (today < new Date(today.getFullYear(), date.getMonth(), date.getDate()) ? 1 : 0);
        return age >= 18;
    }
    getValue() {
        return this.value;
    }
}
