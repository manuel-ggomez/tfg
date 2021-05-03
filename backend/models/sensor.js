module.exports = (sequelize, DataTypes) => {
    const Sensor = sequelize.define('sensor', {
        name: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Name must not be empty"}},
            unique: true
        },
        type: {
            type: DataTypes.STRING
        },
        ip:{
            type: DataTypes.STRING,
            unique: true
        },
        mac: {
            type: DataTypes.STRING,
            unique: true
        }
    });

    return Sensor;
};