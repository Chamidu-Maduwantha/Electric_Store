import { model, Schema } from "mongoose";

export interface user{
    id:string;
    email:string;
    name:string;
    password:string
    address:string;
    isAdmin:boolean;
}


export const UserSchema =  new Schema<user>({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    isAdmin:{type:Boolean,required:true},
},{
    timestamps:true,
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    }
});

export const UserModel = model<user>('user',UserSchema)