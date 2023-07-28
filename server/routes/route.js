import express from 'express';
import { userLogIn, userSignUp } from '../controller/user-controller.js';
import { getProductById, getProducts } from '../controller/product-controller.js';

const router = express.Router();

router.post('/signUp',userSignUp);
router.post('/login',userLogIn);
router.get('/products',getProducts);
router.get('/product/:id',getProductById);
export default router;