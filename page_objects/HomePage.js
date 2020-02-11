import { Selector , t } from 'testcafe';
class HomePage {
    constructor() {
        this.flights = Selector('.text-center.flights');
        this.roundTrip = Selector('#flightSearchRadio-1');

        this.fromDestSelect = Selector('#s2id_location_from');
        this.fromDestination = Selector('.select2-input').nth(5);

        this.toDestSelect = Selector('#s2id_location_to');
        this.toDestination = Selector('.select2-input').nth(5);
        
        this.fromCitySelect = Selector('.select2-result-label');
        this.toCitySelect = Selector('.select2-result-label').nth(0);
        
        this.departDate = Selector('#FlightsDateStart');
        this.returnDate = Selector('#FlightsDateEnd');

        this.chooseFlightsStart = Selector('#FlightsDateStart');
        this.chooseFlightsEnd = Selector('#FlightsDateEnd');

        this.datePickerNextArrow = Selector('.datepicker--nav-action')
    }

    selectFlightsOption = async () => {
        let flights = Selector('.text-center.flights');
        await t.click(flights)
    }

    selectRoundTrip = async () => {
        let roundTrip = Selector('#flightSearchRadio-1');
        await t.click(roundTrip);
    }

    fromDestinationSelect = async (city)  => {
        let fromDestSelect = Selector('#s2id_location_from');
        let fromDestination = Selector('.select2-input').nth(5);
        await t.click(fromDestSelect)
        .typeText(fromDestination, city);
    }

    fromCitySelect = async () => {
        // let fromCity = Selector('.select2-result-label');
        let fromCity = Selector('.select2-match');
        await t.click(fromCity);
    }

    toDestinationSelect = async (city) => {
        let toDestSelect = Selector('#s2id_location_to');
        let toDestination = Selector('.select2-input').nth(5);
        await t.click(toDestSelect)
        .typeText(toDestination, city)
    }

    toCitySelect = async () => {
        let toCity = Selector('.select2-result-label').nth(0);
        await t.click(toCity);
    }

    departDate = async () => {
    //    let departDate = Selector('#FlightsDateStart');
    }

    returnDate = async() => {
        // let returnDate = Selector('#FlightsDateEnd');
    }

    chooseFlightStart = async () => {
        // let chooseFlightsStart = Selector('#FlightsDateStart');
    }

    chooseFlightEnd = async () => {
        // let chooseFlightsEnd = Selector('#FlightsDateEnd');
    }
}

export default new HomePage();