 //ye kyu import kiya pta nhi?
//import { PrismaClient } from "@prisma/client";
import {PrismaClient} from "@prisma/client"
let prisma = new PrismaClient();
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";
import evn from "../../env.js";
export async function signup({email,name,password}){
       let existing = await prisma.user.findUnique({
        where :{email}
       })
       //console.log("checking user for existance")
       if(existing){
          let err = new Error("email already exists");
          err.status=401;
          throw new err;
       }
       //console.log("user doesnot exist");
       try {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        let user = await prisma.user.create({
            data:{
            email,
            password:passwordHash,
            name
        }
        
        })
         let token =  jwt.sign({name,email,id:user.id},env.JWT_SECRET);
         return{
            user:{
                id:user.id,
                name:user.name,
                email:user.email
            },
            token
         }
   
       } catch (error) {
            return error;
       }
}