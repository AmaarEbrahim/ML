"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agent = void 0;
class Agent {
    constructor(explorationCoeffIn, memoryIn) {
        this.totalReward = 0;
        this.explorationCoeff = explorationCoeffIn;
        this.memory = memoryIn;
    }
    determineAction() {
        let shouldExploit = this._shouldExploit();
        let bandit = null;
        if (shouldExploit) {
            bandit = this.memory.determineGreediestAction();
        }
        else {
            bandit = this.memory.determineRandomAction();
        }
        return bandit;
    }
    _shouldExploit() {
        let random = Math.random();
        if (random > this.explorationCoeff) {
            return true;
        }
        return false;
    }
    affect(bandit, amount) {
        this.memory.affect(bandit, amount);
        this.totalReward += amount;
    }
    getTotalReward() {
        return this.totalReward;
    }
}
exports.Agent = Agent;
//# sourceMappingURL=agent.js.map