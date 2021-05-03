const {promisify} = require('util')
const exec = require('child_process').exec
const exec2 = promisify(require('child_process').exec)



exports.createTopic = (req, res, next) => {
    const name = req.body.name
        exec('/home/tfg_manuel/kafka_2.13-2.8.0/bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic ' + name + ' --config retention.ms=5000',
            function (error, stdout, stderr) {
                if (stdout.startsWith('Error')) {
                    res.send(false)
                } else {
                    res.send(true)
                }
            }
        )
}

exports.getTopics = (req, res, next) => {
    async function getTopics() {
        const {stdout, stderr} = await exec2('/home/tfg_manuel/kafka_2.13-2.8.0/bin/kafka-topics.sh --list --zookeeper localhost:2181')
        let topics = stdout.split('\n')
        res.send(topics.filter((topic) => {return topic !== ""}))
    }
    getTopics()
}

exports.deleteTopic = (req, res, next) => {
    const name = req.params.name
    async function deleteTopic(name) {
        const {stdout, stderr} = await exec2('/home/tfg_manuel/kafka_2.13-2.8.0/bin/kafka-topics.sh --zookeeper localhost:2181 --delete --topic ' + name)
        if (stdout !== "") {
            res.send(true)
        } else {
            res.send(false)
        }
    }
    deleteTopic(name)
}
