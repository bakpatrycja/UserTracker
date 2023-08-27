import User from '../database/models/Users.js'

export default class usersRepository {
  async getAllUsers () {
    return await User.findAll()
  }

  async numberOfAllUsers () {
    return await User.count();
  }

  async numberOfAllUsersWhichSawImage () {
    return await User.count({
      where: { userSawImage: true },
    });
  }

  async createUser (userId) {
    return await User.create({userId})
  }

  async updateUser(userId, userSawImage) {
   return await User.update({ userSawImage: userSawImage }, {
      where: {
        userId: userId
      }
    });
  }
}
