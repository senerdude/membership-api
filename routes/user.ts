import { Router } from 'express'
import verifyToken from '../middlewares/verifyToken'
import User from '../models/User'

const routerPosts = Router().get('/', verifyToken, async (req:any,res:any) => {

    const user = await User.findOne({_id:req.user._id})
    if(!user) return res.status(400).send(res.__('login.userNotFound'))

    res.send(user)
})

export default routerPosts