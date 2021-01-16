"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agent_1 = require("./agent");
const bandit_1 = require("./bandit");
const memory_1 = require("./memory");
const banditRecollection_1 = require("./banditRecollection");
function generateMap(bandits) {
    let map = new Map();
    bandits.forEach((value, key) => {
        map.set(value, new banditRecollection_1.BanditRecollection());
    });
    return map;
}
let Bandit1 = new bandit_1.Bandit(1, 1);
let Bandit2 = new bandit_1.Bandit(-1, 1);
let banditArray = new Array(Bandit1, Bandit2);
let map2 = generateMap(banditArray);
let myMemory = new memory_1.Memory(map2);
let me = new agent_1.Agent(.05, myMemory);
for (let i = 0; i < 100; i++) {
    let chosen = me.determineAction();
    let reward = chosen.calculate();
    console.log(reward);
    me.affect(chosen, reward);
}
console.log(me.getTotalReward());
//# sourceMappingURL=main.js.map