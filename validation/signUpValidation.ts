import Joi from '@hapi/joi'

// Signup Validation
const signUpValidation = (data:any) => {

    const userSchema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })

    return userSchema.validate(data)
}

export default signUpValidation


