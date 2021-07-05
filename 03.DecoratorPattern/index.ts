import {PurrinkleChicken} from "./src/Chicken/purrinkleChicken";
import {SeasonedChicken} from "./src/Chicken/seasonedChicken";
import {PurrinklePotato} from "./src/addon/purrinklePotato";

const main = () => {
    const chicken: PurrinkleChicken = new PurrinkleChicken();

    console.log(chicken.getDescription());

    let seasonedChicken: SeasonedChicken = new SeasonedChicken();
    seasonedChicken = new PurrinklePotato(seasonedChicken);

    console.log(seasonedChicken.getDescription())
}

main();