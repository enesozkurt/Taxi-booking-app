const colors = require('colors')
const printBookingHistory = require('../print-booking-history')

test('prints passenger bookings when a passenger has a booking', () => {
    const passenger = {
        name: 'Enes',
        bookings: [{
            passenger: { name: 'Enes' },
            driver: { name: 'Stefan' },
            origin: 'Kreuzberg',
            destination: 'Neukolln'
        }]
    }

    const consoleSpy = jest.spyOn(console, 'log')
    printBookingHistory(passenger)

    expect(consoleSpy).toHaveBeenLastCalledWith('Enes booked Stefan to travel from Kreuzberg to Neukolln')

    consoleSpy.mockRestore()
})

test('prints warning message when a passenger has no booking', () => {
    const passenger = {
        name: 'Enes',
        bookings: []
    }

    const consoleSpy = jest.spyOn(console, 'log')
    printBookingHistory(passenger)

    expect(consoleSpy).toHaveBeenLastCalledWith('Enes has no bookings yet.')

    consoleSpy.mockRestore()
})