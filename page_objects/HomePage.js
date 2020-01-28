import { Selector } from 'testcafe';

class HomePage {
    constructor() {
        this.flights = Selector('.text-center.flights');
        this.roundTrip = Selector('#flightSearchRadio-1');
        this.fromDestination = Selector('#s2id_location_from');
        this.toDestination = Selector('#s2id_location_to');
    }
}

export default new HomePage();