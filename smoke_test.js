import HomePage from './page_objects/HomePage.js';

fixture `Smoke Test`
    .page `https://www.phptravels.net/home`;

test('flight bookings', async t => {
    await t
        .click(HomePage.flights)
        .click(HomePage.roundTrip)

        .click(HomePage.fromDestSelect)
        .typeText(HomePage.fromDestination, 'Brisbane')
        .click(HomePage.fromCitySelect)

        .click(HomePage.toDestSelect)
        .typeText(HomePage.toDestination, 'New York')
        .click(HomePage.toCitySelect)
});