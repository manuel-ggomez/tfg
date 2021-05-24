const express = require('express');
const router = express.Router();

const userController = require("../controllers/user");
const sensorController = require("../controllers/sensor");
const topicController = require("../controllers/topic");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/user/register', userController.register);
router.post('/user/login', userController.login);
router.put('/user/edit/:userId', userController.edit);
router.put('/user/password/:userId', userController.changePassword);
router.get('/user/userlist', userController.userList);
router.delete('/user/delete/:userId', userController.deleteUser);
router.put('/user/validate/:userId', userController.validateUser)

router.post('/sensor/create', sensorController.createSensor);
router.get('/sensor/getSensors', sensorController.getSensors);
router.delete('/sensor/delete/:sensorId', sensorController.deleteSensor);
router.put('/sensor/openSensor', sensorController.openSensor);
router.put('/sensor/openSubsistema', sensorController.openSubsistema);
router.put('/sensor/runScript', sensorController.runScript);
router.put('/sensor/stopScript', sensorController.stopScript);

router.post('/topic/create', topicController.createTopic)
router.get('/topic/getTopics', topicController.getTopics)
router.delete('/topic/delete/:name', topicController.deleteTopic)

module.exports = router;