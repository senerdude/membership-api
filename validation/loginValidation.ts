import Joi from '@hapi/joi'
import i18n from '../i18n'

// Login Validation
const loginValidation = (req:any) => {

    const userSchema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required()
    })

    return userSchema.validate(req.body)
}

export default loginValidation



