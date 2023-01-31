import { Router } from "express";
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler'
import { user, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../constatnts/http_status";
import bcrypt from 'bcryptjs'
const router = Router();


router.get("/seed",asyncHandler(
    async(req,res)=>{
        const usersCount = await UserModel.countDocuments();
        if(usersCount>0){
            res.send("seed is already done!");
            return;
        }

        await UserModel.create(sample_users);
        res.send("Seed is Done")
    })
)

router.post("/login",asyncHandler(
    async(req,res)=>{
        const {email, password} = req.body;
        const user = await UserModel.findOne({email,password});
    
        if(user){
            res.send(genarateTokenResponce(user))
        }else{
            res.status(HTTP_BAD_REQUEST).send("username or password invalid");
        }
    }
))

router.post('/register',asyncHandler(
    async(req,res)=>{
        const{name,email,password,address} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            res.send(HTTP_BAD_REQUEST).send('User already exist');
            return;
        }
       
        const encryptedPassword = await bcrypt.hash(password,10);

        const newUSer:user ={
            id:'',
            name,
            email:email.toLowerCase(),
            password:encryptedPassword,
            address,
            isAdmin:false
        }

        const dbUser = await UserModel.create(newUSer);
        res.send(genarateTokenResponce(dbUser))
        
    }
))

const genarateTokenResponce = (user:any)=>{
    const token = jwt.sign({
        email:user.email,isAdmin:user.isAdmin
    },"SomeRandomText",{
        expiresIn:"30d"
    });
}
export default router;