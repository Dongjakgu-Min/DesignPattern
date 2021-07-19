import {PC} from "./PC";
import {AMD} from "../parts/cpu/AMD";
import {SamsungDisplay} from "../parts/display/SamsungDisplay";
import {SamsungSSD} from "../parts/ssd/SamsungSSD";

export class DellFactory implements PC {
    createCPU() {
        return new AMD();
    }

    createDisplay() {
        return new SamsungDisplay();
    }

    createSSD() {
        return new SamsungSSD();
    }
}