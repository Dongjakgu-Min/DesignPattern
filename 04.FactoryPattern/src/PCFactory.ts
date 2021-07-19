import {LGFactory} from "./factory/LGFactory";
import {DellFactory} from "./factory/DellFactory";
import {PC} from "./factory/PC";

export class PCFactory {
    createPC (type: string) {
        let pcFactory: PC;
        switch (type) {
            case "LG":
                pcFactory = new LGFactory();
                break;
            case "Dell":
                pcFactory = new DellFactory();
                break;
        }

        pcFactory.createCPU();
        pcFactory.createSSD();
        pcFactory.createDisplay();
    }
}