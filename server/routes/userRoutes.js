import express from 'express';
import { registerUser, loginUser,userCredits, paymentRazorpay } from '../controllers/userController.js';
import  userauth from  '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/credits',userauth,userCredits);
userRouter.post('/pay-razor',userauth,paymentRazorpay);

export default userRouter;
