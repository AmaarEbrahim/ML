"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanditRecollection = void 0;
class BanditRecollection {
    constructor() {
        this.previousValues = new Array();
    }
    calculateAverageValue() {
        if (this.previousValues.length == 0) {
            return 0;
        }
        else {
            let sum = 0;
            this.previousValues.forEach((value, index) => {
                sum += value;
            });
            return sum / this.previousValues.length;
        }
    }
    affect(amount) {
        this.previousValues.push(amount);
    }
}
exports.BanditRecollection = BanditRecollection;
//# sourceMappingURL=banditRecollection.js.map