const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c85c5150477b32e7d4c0019be5518af4&query='+latitude+','+longitude

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, `It is currently ${body.current.temperature} degrees out. There is ${body.current.precip}% chance of rain.`)
        }
    })
}

module.exports = forecast