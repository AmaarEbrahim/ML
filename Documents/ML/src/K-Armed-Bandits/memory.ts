import { Bandit } from "./bandit";
import { BanditRecollection } from "./banditRecollection";

export class Memory {
    private memory: Map<Bandit, BanditRecollection>;

    constructor(bandits: Map<Bandit, BanditRecollection>) {
        this.memory = bandits;
    }

    public determineGreediestAction(): Bandit {
        let greediestBandits: Bandit[] = this._createArrayOfGreediestActions();
        let randomKey = Math.floor(Math.random() * greediestBandits.length)
        return greediestBandits[randomKey];        
    }

    private _createArrayOfGreediestActions(): Bandit[] {
        let greediestBandits: Bandit[] = new Array<Bandit>();
        let greediestBanditsValue: number = 0;
        this.memory.forEach((value: BanditRecollection, key: Bandit) => {
            if (value.calculateAverageValue() > greediestBanditsValue) {
                greediestBanditsValue = value.calculateAverageValue();
                greediestBandits.push(key);
            } else if (value.calculateAverageValue() == greediestBanditsValue) {
                greediestBandits.push(key);
            }
        })
        return greediestBandits;
    }

    private _createArrayOfBandits(): Bandit[] {
        let bandits: Bandit[] = new Array<Bandit>();
        this.memory.forEach((value: BanditRecollection, key: Bandit) => {
            bandits.push(key);
        })
        return bandits;
    }

    public determineRandomAction(): Bandit {

        let bandits: Bandit[] = this._createArrayOfBandits();
        let randomKey = Math.floor(Math.random() * bandits.length)
        console.log(bandits[randomKey])
        return bandits[randomKey];

    }

    public affect(bandit: Bandit, amount: number): void {
        let recollection: BanditRecollection = this.memory.get(bandit);
        recollection.affect(amount);
    }
    
}