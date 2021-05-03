const Sequelize = require("sequelize");
const db = require('../models');
const user = db['user']
const sensor = db['sensor']
const models = {user: user, sensor: sensor}

exports.createSensor = (req, res, next) => {
    const name = req.body.name;
    const type = req.body.type;
    const ip = req.body.ip;
    const mac = req.body.mac;
    const sensor = models.sensor.build({
        name,
        type,
        ip,
        mac
    });
    sensor.save({fields: ["name", "type", "ip", "mac"]})
        .then(sensor => {
            res.send(sensor)
        })
        .catch(error => res.send(error.errors[0].message));
}

exports.getSensors = (req, res, next) => {
    models.sensor.findAll()
        .then((sensors) => {
            res.send(sensors)
        })
        .catch(error => next(error));
}

exports.deleteSensor = (req,res,next) => {
    const id = req.params.sensorId;
    models.sensor.destroy({where: {id: id}})
        .then(() => {
            res.send(true)
        })
        .catch(error => next(error));
}