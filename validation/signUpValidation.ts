import Joi from '@hapi/joi'

// Signup Validation
const signUpValidation = (req:any) => {

    const userSchema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required()
    })

    return userSchema.validate(req.body)
}

export default signUpValidation


