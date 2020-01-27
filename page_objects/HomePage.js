import { Selector } from 'testcafe';

class HomePage {
    constructor() {
        this.flights = Selector('.text-center.flights');
    }
}

export default new HomePage();