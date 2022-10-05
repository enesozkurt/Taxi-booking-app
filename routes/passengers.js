const {passengerDatabase, driverDatabase} = require("../database");

const router = require('express').Router()

router.get('/', async (req, res) => {
    const passengers = await passengerDatabase.load()
    res.render('passengers', {passengers})
})

router.post('/', async (req, res) => {
    const passenger = await passengerDatabase.insert(req.body)
    res.send(passenger)
})

router.delete('/:passengerId', async (req, res) => {
    await passengerDatabase.removeBy('_id', req.params.passengerId)

    res.send('OK')
})

router.get('/:passengerId', async (req, res) => {
    const passenger = await passengerDatabase.find(req.params.passengerId)

    if (!passenger) return res.status(404).send('Cannot find passenger')
    res.render('passenger', { passenger })
})

router.post('/:passengerId/bookings', async (req, res) => {
    const { passengerId } = req.params
    const { driverId, origin, destination } = req.body

    const passenger = await passengerDatabase.find(passengerId)
    const driver = await driverDatabase.find(driverId)

    const booking = await passengerDatabase.book(driver, passenger, origin, destination)

    res.send(booking)
})

router.patch('/:passengerId', async (req, res) => {
    const { passengerId } = req.params
    const { name } = req.body
    await passengerDatabase.update(passengerId, { name })
})

module.exports = router