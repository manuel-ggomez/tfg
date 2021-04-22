module.exports = (sequelize, DataTypes) => {
    const Sensor = sequelize.define('sensor', {
        name: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Name must not be empty"}}
        },
        type: {
            type: DataTypes.STRING
        },
        ip:{
            type: DataTypes.STRING
        },
        mac: {
            type: DataTypes.STRING
        }
    });

    return Sensor;
};