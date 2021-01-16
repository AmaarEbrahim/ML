import * as distributions from "distributions"


export class Bandit {
    public meanReward: number;
    public standardDeviation: number;

    constructor(meanRewardIn: number, standardDeviationIn: number) {
        this.meanReward = meanRewardIn;
        this.standardDeviation = standardDeviationIn;
    }

    public calculate(): number {
        //todo: implement
        let x = distributions.Normal(this.meanReward, this.standardDeviation);
        //x.cdf()
        return this.meanReward;
    }
}