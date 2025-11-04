import express from 'express'
import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv'
const app = express();

app.use(express.urlencoded({extended:true}));

const server = http.createServer(app);

server.listen(env.PORT,()=>{
    console.log(`http://localhost:${env.PORT}`)
})