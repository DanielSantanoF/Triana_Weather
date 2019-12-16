'use strict'

const error_types = require('./error_types');
const _ = require('lodash');

module.exports = {

    newStation: async (req, res) => {
        let station = new MeteorologicStation({
            rain: req.body.rain,
            wind_speed: req.body.wind_speed,
            wind_direction: req.body.wind_direction,
            temperature: req.body.temperature,
            humidity: req.body.humidity,
            air_quality: req.body.air_quality,
            pressure: req.body.pressure
        });

        station.save((err, station) => {
            if (err) res.send(500, err.message);
            res.status(201).json(station);
        })
    }
}