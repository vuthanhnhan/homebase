import { Router } from "express";
import userController from "../../../controllers/users";

const router = Router();

router.get('/:id', userController.getUserInfo);
router.get('/', userController.getAllUser);
router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser);

export default router;