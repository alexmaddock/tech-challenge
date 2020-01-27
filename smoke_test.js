import HomePage from './page_objects/HomePage.js';

fixture `Smoke Test`
    .page `https://www.phptravels.net/home`;

test('flight bookings', async t => {
    await t
        .click(HomePage.flights)
        .click(Hompage.roundTrip)
        .type(HomePage.fromDestination, 'Brisbane')
        .enter()
        .type(HomePage.toDestination, 'Los Angeles')
        .enter()
});