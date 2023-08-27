import e, * as express from "express";
import { StatusCode } from "status-code-enum";
import usersRepository from "../repository/usersRepository";
const router = express.Router();
const repository = new usersRepository();
import { calculateListOfUsersWhichSawImageInPercentage } from '../utils/usersController.utils'

router.post("/create-user", async (req, res) => {
  const { userId } = req.body;

  try {
    const newUser = await repository.createUser(userId);
    return res.status(StatusCode.SuccessCreated).json(newUser);
  } catch (err) {
    console.log(err);
    return res.status(StatusCode.ServerErrorInternal).json({
      message: `An error occured: ${err}`,
    });
  }
});

router.get("/get-users-data", async (req, res) => {
  try {
    const listOfUsersWhichSawImage = await repository.numberOfAllUsersWhichSawImage();
    const listOfUsers = await repository.numberOfAllUsers();
    let numberOfUsersWhichSawImageInPercentage = 0;

    if (listOfUsersWhichSawImage && listOfUsers) {
      numberOfUsersWhichSawImageInPercentage = calculateListOfUsersWhichSawImageInPercentage (listOfUsersWhichSawImage, listOfUsers)
    }

    return res.status(StatusCode.SuccessOK).json({listOfUsers,numberOfUsersWhichSawImageInPercentage});
  } catch (err) {
    console.log(err);
    return res.status(StatusCode.ServerErrorInternal).json({
      message: `An error occured: ${err}`,
    });
  }
});

router.post("/update-user", async (req, res) => {
  const { userId, userSawImage } = req.body;

  try {
    const updatedUser = await repository.updateUser(
      userId,
      userSawImage
    );
    return res.status(StatusCode.SuccessCreated).json(updatedUser);
  } catch (err) {
    console.log(err);
    return res.status(StatusCode.ServerErrorInternal).json({
      message: `An error occured: ${err}`,
    });
  }
});

export default router;
