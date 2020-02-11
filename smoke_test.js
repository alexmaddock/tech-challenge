import HomePage from './page_objects/HomePage.js';

fixture `Smoke Test`
    .page `https://www.phptravels.net/home`;

test('flight bookings [basic.page.object.model]', async t => {
    await t
        .click(HomePage.flights)
        .click(HomePage.roundTrip)

        .click(HomePage.fromDestSelect)
        .typeText(HomePage.fromDestination, 'Brisbane')
        .click(HomePage.fromCitySelect)

        .click(HomePage.toDestSelect)
        .typeText(HomePage.toDestination, 'New York')
        .click(HomePage.toCitySelect)

        .click(HomePage.chooseFlightsStart)
        .click(HomePage.datePickerNextArrow)
        
});

test.skip('flight bookings [correct.page.object.model]', async () => {
    await HomePage.selectFlightsOption();
    await HomePage.selectRoundTrip();

    await HomePage.fromDestinationSelect('Brisbane');
    await HomePage.fromCitySelect();

    await HomePage.toDestinationSelect('New York');
    await HomePage.toCitySelect();
    
})