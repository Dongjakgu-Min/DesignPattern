import {PC} from "./PC";
import {Intel} from "../parts/cpu/Intel";
import {LGDisplay} from "../parts/display/LGDisplay";
import {MicronSSD} from "../parts/ssd/MicronSSD";

export class LGFactory implements PC {
    createCPU() {
        return new Intel();
    }

    createDisplay() {
        return new LGDisplay();
    }

    createSSD() {
        return new MicronSSD();
    }
}