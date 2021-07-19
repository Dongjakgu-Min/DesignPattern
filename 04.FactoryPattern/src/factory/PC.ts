import {Display} from "../parts/display/Display";
import {CPU} from "../parts/cpu/CPU";
import {SSD} from "../parts/ssd/SSD";

export interface PC {
    createDisplay(): Display;
    createCPU(): CPU;
    createSSD(): SSD;
}