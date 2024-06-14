import { Basket } from './providers/basket';

export class MainService {
    basketService = new Basket();

    constructor() {
        this.init();
    }

    init() {
        // this.basketService.initBasket();
    }
}
