"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bandit = void 0;
const distributions = require("distributions");
class Bandit {
    constructor(meanRewardIn, standardDeviationIn) {
        this.meanReward = meanRewardIn;
        this.standardDeviation = standardDeviationIn;
    }
    calculate() {
        //todo: implement
        let x = distributions.Normal(this.meanReward, this.standardDeviation);
        //x.cdf()
        return this.meanReward;
    }
}
exports.Bandit = Bandit;
//# sourceMappingURL=bandit.js.map