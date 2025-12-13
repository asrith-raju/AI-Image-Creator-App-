import express from 'express';
import { registerUser, loginUser,userCredits, paymentRazorpay, verifyRazorpay } from '../controllers/userController.js';
import  userauth from  '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/credits',userauth,userCredits);
userRouter.post('/pay-razor',userauth,paymentRazorpay);
userRouter.post("/verify-razor", verifyRazorpay);


export default userRouter;
