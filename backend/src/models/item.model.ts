import { model, Schema } from "mongoose";

export interface Item{
    id: string;
    name:string;
    price:number;
    tags: string[];
    imageUrl: string;
    favorite: boolean;

}

export const ItemSchema = new Schema<Item>(
    {
        name:{type:String,required:true},
        price:{type:Number,required:true},
        tags:{type:[String],required:true},
        imageUrl:{type:String,required:true},
        favorite:{type:Boolean,default:false}
        
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
);


export const ItemModel = model<Item>('item',ItemSchema);