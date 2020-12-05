import Joi from '@hapi/joi'

// Verify Email Validation
const verifyEmailValidation = (req:any) => {

    const verifyEmailSchema = Joi.object({
        email: Joi.string().required().email(),
        code: Joi.string().min(10).required()
    })

    return verifyEmailSchema.validate(req.body)
}

export default verifyEmailValidation

