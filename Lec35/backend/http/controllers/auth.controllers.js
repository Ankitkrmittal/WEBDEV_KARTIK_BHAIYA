import {signup} from '../services/auth.service.js';
//import { signupSchema } from "../schemas/auth.schema";
import { signupSchema } from '../schemas/auth.schema.js';
export async function postSignup(req,res,next){
     try {
        const result = signupSchema.safeParse(req.body)
        if(!result.success){
            return res.status(401).json({
                error :JSON.parse(result.error)
            })
        }
        
        const {email,name,password} = req.body;
        let data = await signup({email,name,password});
        console.log(data);
        res.status(200).json({
            data
        })


     } catch (error) {
        res.status(500).json({
            message:'error while signup',
            error
        })
     }
}