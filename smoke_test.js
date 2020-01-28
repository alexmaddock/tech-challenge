import HomePage from './page_objects/HomePage.js';

fixture `Smoke Test`
    .page `https://www.phptravels.net/home`;

test('flight bookings', async t => {
    await t
        .click(HomePage.flights)
        .click(HomePage.roundTrip)
        .typeText(HomePage.fromDestination, 'Brisbane')
        .pressKey('enter')
        .typeText(HomePage.toDestination, 'New York')
        .pressKey('enter')
});