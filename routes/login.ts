import { Router } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import User from '../models/User'
import loginValidation from '../validation/loginValidation'
import config from '../config'

// POST : Login
const loginRouter = Router().post('/login', async (req:any,res:any) => {

    // Validate Data
    const { error } = loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    // Check email & password
    const invalidText = "Email or password is wrong."
    const verificationText = "Please verify your email address before login"
    
    const user:any = await User.findOne({'email.address':req.body.email }).select('+password')
    if(!user) return res.status(400).send(invalidText)

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send(invalidText)

    // Check email verification
    if(user.email.verified !== 'true') return res.status(400).send(verificationText)

    const token = jwt.sign({ _id: user._id }, config.jwt.secret)
    res.header('auth-token', token).send(token)
})

export default loginRouter;
