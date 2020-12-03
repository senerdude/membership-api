import { Router } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/User'
import jwt from 'jsonwebtoken'
import { nanoid } from 'nanoid'
import signUpValidation from '../validation/signUpValidation'
import emailVerification from '../modules/emailVerification'
import config from '../config'

// POST : Sign Up
const signUpRouter = Router().post('/signup', async (req:any,res:any) => {

    // Validate Data
    const { error } = signUpValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    // Check email
    const emailExist = await User.findOne({'email.address':req.body.email})
    if(emailExist) return res.status(400).send(`${req.body.email} already exist.`)

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create User Obj
    const user = new User({
        name: req.body.name,
        'email.address': req.body.email,
        'email.code': nanoid(10),
        password: hashedPassword
    });

    user.save().then((savedUser:any) => {
        // Return Token
        const token = jwt.sign({ _id: savedUser._id }, config.jwt.secret)
        res.header('auth-token', token).send(token)

        // Send Activation Code
        if(config.smtp.enabled){
            // Try to send activation link
            emailVerification(req.body.email, savedUser.email.code).catch(error => {
                console.log(error)
            })
        }
    }).catch(error => {
        res.status(400).send(error)
    })
})

export default signUpRouter
