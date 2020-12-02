import Joi from '@hapi/joi'

// Login Validation
const loginValidation = (data:any) => {

    const userSchema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })

    return userSchema.validate(data)
}

export default loginValidation



