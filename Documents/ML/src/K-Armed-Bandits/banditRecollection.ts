export class BanditRecollection {

    private previousValues: Array<number> = new Array();

    constructor() { }

    public calculateAverageValue(): number {
        if (this.previousValues.length == 0) {
            return 0;
        } else {
            let sum: number = 0;
            this.previousValues.forEach((value: number, index: number) => {
                sum += value;
            })
            return sum / this.previousValues.length;
        }
    }

    public affect(amount: number): void {
        this.previousValues.push(amount);
    }
}