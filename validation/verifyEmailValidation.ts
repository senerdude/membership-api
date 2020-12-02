import Joi from '@hapi/joi'

// Verify Email Validation
const verifyEmailValidation = (data:any) => {

    const verifyEmailSchema = Joi.object({
        email: Joi.string().min(6).required().email(),
        code: Joi.string().min(10).required()
    })

    return verifyEmailSchema.validate(data)
}

export default verifyEmailValidation

