import {PCFactory} from "./src/PCFactory";

const main = () => {
    const PC = new PCFactory();
    PC.createPC('Dell');
}

main();
