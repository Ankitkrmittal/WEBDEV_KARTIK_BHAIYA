import express from 'express'
import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './http/routes/auth.routes.js'
import env from './env.js'
const app = express();

app.use(express.urlencoded({extended:true}));

const server = http.createServer(app);

app.use('/api/auth',authRoutes)
server.listen(env.PORT,()=>{
    console.log(`http://localhost:${env.PORT}`)
})