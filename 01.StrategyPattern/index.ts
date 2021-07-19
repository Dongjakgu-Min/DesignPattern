import { BS } from "./src/chickens/BS";
import { PLK } from "./src/chickens/PLK";

const main = () => {
    const bs = new BS('백숙', 12000);
    const plk = new PLK('뿌링클', 17000);

    bs.getName();
    bs.getPrice();
    bs.getMethod();
    bs.getTaste();

    plk.getName();
    plk.getPrice();
    plk.getMethod();
    plk.getTaste();
}

main();