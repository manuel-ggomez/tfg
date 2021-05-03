'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('sensors',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    unique: true
                },
                name: {
                    type: Sequelize.STRING,
                    validate: {notEmpty: {msg: "Name must not be empty"}},
                    unique: true
                },
                type: {
                    type: Sequelize.STRING
                },
                ip:{
                    type: Sequelize.STRING,
                    unique: true
                },
                mac: {
                    type: Sequelize.STRING,
                    unique: true
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                }
            },
            {
                sync: {force: true}
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('sensors');
    }
};