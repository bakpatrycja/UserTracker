import * as Sequelize from 'sequelize'
import db from '../db.js'

const User = db.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: Sequelize.STRING,
  userSawImage: Sequelize.BOOLEAN,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

export default User
