import { Router } from 'express'
import User from '../models/User'
import verifyEmailValidation from '../validation/verifyEmailValidation'
import config from '../config'

const verifyEmailRouter = Router().post('/verify/email', async (req:any,res:any) => {

    // Check SMTP Service Status
    if(!config.smtp.enabled) return res.status(403).send(`SMTP service is disabled.`)

    // Validate Data
    const { error } = verifyEmailValidation(req.body)
    if(error) return res.status(401).send(error.details[0].message)

    // Check email
    const user:any = await User.findOne({'email.address':req.body.email, 'email.code':req.body.code})
    if(user) {

        // Check expire date
        const expireDate:Date = new Date(user.email.expire)
        const currentDate:Date = new Date()
        console.log(expireDate, currentDate)
        if(currentDate > expireDate) res.status(401).send("This link expired")

        // Check status
        if(user.email.verified === "true") res.status(401).send("This account already verified.")

        // Verify Account
        await User.updateOne({'email.address':req.body.email },{'email.verified':true })

        // Update status
        res.status(200).send("OK")

    } else {
        return res.status(401).send(`Email or activation code is wrong.`)
    }
})

export default verifyEmailRouter