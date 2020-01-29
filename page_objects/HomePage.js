import { Selector } from 'testcafe';

class HomePage {
    constructor() {
        this.flights = Selector('.text-center.flights');
        this.roundTrip = Selector('#flightSearchRadio-1');
        this.fromDestSelect = Selector('#s2id_location_from');
        this.fromDestination = Selector('.select2-drop').nth(3)
        this.toDestSelect = Selector('#s2id_location_to')
        this.toDestination = Selector('.select2-drop').nth(3)
        this.fromCitySelect = Selector('.select2-result-label')
        this.toCitySelect = Selector('.select2-result-label').nth(0)
        
        this.departDate = Selector('#FlightsDateStart')
        this.returnDate = Selector('#FlightsDateEnd')
    }
}

export default new HomePage();