const Sequelize = require("sequelize");
const db = require('../models');
const user = db['user']
const sensor = db['sensor']
const models = {user: user, sensor: sensor}
const {promisify} = require('util')
const exec = promisify(require('child_process').exec)
const exec2 = require('child_process').exec

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

exports.openSensor = (req, res, next) => {
    const ip = req.body.ip
    async function openSensor(ip) {
        const execRun = (cmd) => {
            return new Promise((resolve, reject) => {
                exec2(cmd, (error, stdout, stderr) => {
                    if (error) {
                        resolve(stdout)
                    } else {
                        resolve(stdout)
                    }
                })
            })
        }
        try {
            const proceso = await execRun('fuser -vk 8080/tcp')
        } catch(e) {
            console.log(e)
        }
        const {stdout, stderr} = exec('/home/tfg_manuel/go/bin/gotty --once -w ssh root@' + ip)
        res.send(true)
    }
    openSensor(ip)
}

exports.openSubsistema = (req, res, next) => {
    const name = req.body.name
    async function openSubsistema(name) {
        const execRun = (cmd) => {
            return new Promise((resolve, reject) => {
                exec2(cmd, (error, stdout, stderr) => {
                    if (error) {
                        resolve(stdout)
                    } else {
                        resolve(stdout)
                    }
                })
            })
        }
        try {
            const proceso = await execRun('fuser -vk 8080/tcp')
        } catch(e) {
            console.log(e)
        }
        const {stdout, stderr} = exec('/home/tfg_manuel/go/bin/gotty --once -w sudo docker exec -it ' + name + ' bash')
        res.send(true)
    }
    openSubsistema(name)
}

exports.runScript = (req, res, next) => {
    async function runScript() {
        const {stdout, stderr} = exec('ssh root@172.17.0.3 "cd ..; python3 running.py"')
        res.send(true)
    }
    runScript()
}

exports.stopScript = (req, res, next) => {
    async function stopScript() {
        const {stdout, stderr} = exec('ssh root@172.17.0.3 pkill -9 -f running.py')
        res.send(true)
    }
    stopScript()
}

exports.monitorScript = (req, res, next) => {
    async function monitorScript() {
        const {stdout, stderr} = exec('ssh root@172.17.0.3 ps aux | grep running.py')
        res.send(true)
    }
    monitorScript()
}