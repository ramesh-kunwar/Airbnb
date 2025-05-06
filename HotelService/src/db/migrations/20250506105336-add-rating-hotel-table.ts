"use strict";

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    //
    await queryInterface.sequelize.query(`
      

      ALTER TABLE hotels
ADD COLUMN rating DECIMAL(3, 2) DEFAULT 0.00,
ADD COLUMN rating_count INTEGER DEFAULT 0;
      
      `);
  },

  async down(queryInterface: QueryInterface) {
    //

    await queryInterface.sequelize.query(`
      ALTER TABLE hotels
      DROP COLUMN rating,
      DROP COLUMN rating_count
      `);
  },
};
