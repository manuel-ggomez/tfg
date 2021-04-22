const express = require('express');
const router = express.Router();

const userController = require("../controllers/user");
const sensorController = require("../controllers/sensor");

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

router.post('/sensor/create', sensorController.createSensor);
router.get('/sensor/getSensors', sensorController.getSensors);
router.delete('/sensor/delete/:sensorId', sensorController.deleteSensor);

module.exports = router;