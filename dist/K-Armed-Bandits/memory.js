"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memory = void 0;
class Memory {
    constructor(bandits) {
        this.memory = bandits;
    }
    determineGreediestAction() {
        let greediestBandits = this._createArrayOfGreediestActions();
        let randomKey = Math.floor(Math.random() * greediestBandits.length);
        return greediestBandits[randomKey];
    }
    _createArrayOfGreediestActions() {
        let greediestBandits = new Array();
        let greediestBanditsValue = 0;
        this.memory.forEach((value, key) => {
            if (value.calculateAverageValue() > greediestBanditsValue) {
                greediestBanditsValue = value.calculateAverageValue();
                greediestBandits.push(key);
            }
            else if (value.calculateAverageValue() == greediestBanditsValue) {
                greediestBandits.push(key);
            }
        });
        return greediestBandits;
    }
    _createArrayOfBandits() {
        let bandits = new Array();
        this.memory.forEach((value, key) => {
            bandits.push(key);
        });
        return bandits;
    }
    determineRandomAction() {
        let bandits = this._createArrayOfBandits();
        let randomKey = Math.floor(Math.random() * bandits.length);
        console.log(bandits[randomKey]);
        return bandits[randomKey];
    }
    affect(bandit, amount) {
        let recollection = this.memory.get(bandit);
        recollection.affect(amount);
    }
}
exports.Memory = Memory;
//# sourceMappingURL=memory.js.map