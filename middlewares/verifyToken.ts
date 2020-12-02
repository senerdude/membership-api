import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken"
import config from '../config'

const verifyToken = (req:Request, res:Response, next:NextFunction) => {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send('Access Denied')

    try {
        (req as any).user = jwt.verify(token, config.jwt.secret)
        next()
    } catch {
        res.status(400).send('Invalid Token')
    }
}

export default verifyToken;