const express = require('express');
const { getForm, postData } = require('../controllers/user-controller');
const userRouter = express.Router();

userRouter.get('/', getForm)

userRouter.post('/', postData)

module.exports = userRouter;