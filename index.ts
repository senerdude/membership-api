import express from 'express'
import mongoose from 'mongoose'
import config from './config'

import signupRoute from './routes/signUp'
import loginRoute from './routes/login'
import userRoute from './routes/user'
import verifyEmailRouter from './routes/verifyEmail'

// App
const app = express();

// DB
mongoose.connect(config.mongo.cs, config.mongo.opt, () => console.log('Database connection successful.'))

// Middlewares
app.use(express.json())

// Routes
app.use('/api/user', signupRoute)
app.use('/api/user', loginRoute)
app.use('/api/user', userRoute)
app.use('/api/user', verifyEmailRouter)

// Start to listen requests
app.listen(config.express.port, () => console.log(`Server is listening on port ${config.express.port}`))
