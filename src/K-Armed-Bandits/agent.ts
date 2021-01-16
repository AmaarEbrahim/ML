import { Bandit } from "./bandit";
import { Memory } from "./memory";

export class Agent {
    private explorationCoeff: number;
    private memory: Memory;
    private totalReward: number = 0;

    constructor(explorationCoeffIn: number, memoryIn: Memory) {
        this.explorationCoeff = explorationCoeffIn
        this.memory = memoryIn;
    }

    public determineAction(): Bandit {
        let shouldExploit: boolean = this._shouldExploit();
        let bandit: Bandit = null;
        if (shouldExploit) {
            bandit = this.memory.determineGreediestAction();
        } else {
            bandit = this.memory.determineRandomAction();
        }
        return bandit;
    }

    private _shouldExploit(): boolean {
        let random: number = Math.random();
        if (random > this.explorationCoeff) {
            return true;
        }
        return false;
    }

    public affect(bandit: Bandit, amount: number): void {
        this.memory.affect(bandit, amount);
        this.totalReward += amount;
    }

    public getTotalReward(): number {
        return this.totalReward;
    }
}