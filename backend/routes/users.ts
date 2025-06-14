import { Router } from 'express';
import {register} from '../controllers/user/register'
import {login} from "../controllers/user/login";
import authMiddleware from "../midllwares/authMiddleware";
import {getProfile} from "../controllers/user/getProfile";

const usersRouter = Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.get('/profile', authMiddleware, getProfile);

export default usersRouter;