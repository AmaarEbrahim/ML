import { Agent } from "./agent";
import { BanditCollection } from "./banditCollection";
import { Bandit } from "./bandit";
import { Memory } from "./memory";
import { BanditRecollection } from "./banditRecollection"

function generateMap(bandits: Bandit[]) {
    let map: Map<Bandit, BanditRecollection> = new 
        Map<Bandit, BanditRecollection>();
    bandits.forEach((value: Bandit, key: number) => {
        map.set(value, new BanditRecollection());
    })
    return map;
}


let Bandit1: Bandit = new Bandit(1, 1);
let Bandit2: Bandit = new Bandit(-1, 1);

let banditArray: Bandit[] = new Array<Bandit>(
    Bandit1, Bandit2
)

let map2 = generateMap(banditArray);


let myMemory: Memory = new Memory(map2);
let me: Agent = new Agent(.05, myMemory);


for (let i = 0; i < 100; i++) {
    let chosen: Bandit = me.determineAction();
    let reward: number = chosen.calculate();
    me.affect(chosen, reward);
}

console.log(me.getTotalReward());
