import {VillainA} from "./src/concrete/villain/VillainA";
import {VillainB} from "./src/concrete/villain/VillainB";
import {VillainC} from "./src/concrete/villain/VillainC";

import {ActionMask} from "./src/concrete/ActionMask";
import {Villain} from "./src/concrete/villain/Villain";

const main = () => {
    const actionMask: ActionMask = new ActionMask();

    const villainA: Villain = new VillainA(actionMask);
    const villainB: Villain = new VillainB(actionMask);
    const villainC: Villain = new VillainC(actionMask);

    actionMask.setAction(3);
    actionMask.setAction(0);
    actionMask.setAction(1);
    actionMask.setAction(2);
}

main();