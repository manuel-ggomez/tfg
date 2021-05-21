'use strict';
const crypt = require('../helpers/crypt');

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('users', [
            {
                name: 'Manuel',
                password: crypt.encryptPassword('pandora', 'admin'),
                email: 'admin',
                validated: true,
                salt: 'admin',
                isAdmin: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, {});
    }
};