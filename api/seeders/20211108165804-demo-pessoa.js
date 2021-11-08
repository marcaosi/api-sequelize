'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Pessoas', [{
        nome: 'John Doe',
        ativo: 1,
        email: 'JohnDoe@mail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
