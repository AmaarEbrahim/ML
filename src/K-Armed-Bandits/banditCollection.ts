import { Bandit } from "./bandit";

export class BanditCollection {
    private bandits: Array<Bandit>;

    constructor(banditsIn: Array<Bandit>) {
        this.bandits = banditsIn;
    }
}