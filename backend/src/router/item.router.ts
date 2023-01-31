import { Router } from "express";
import { sample_items } from "../data";
import asyncHandler from "express-async-handler";
import { ItemModel } from "../models/item.model";
const router = Router();

router.get("/seed",asyncHandler(
    async(req,res)=>{
        const itemCount = await ItemModel.countDocuments();
        if(itemCount>0){
            res.send("seed is already done!");
            return;
        }

        await ItemModel.create(sample_items);
        res.send("Seed is Done")
    })
)

router.get("/",asyncHandler(
    async (req,res) =>{
        const item = await ItemModel.find();
        res.send(item);
    }
))

router.get("/search/:searchTerm",asyncHandler(
    async (req,res)=>{
        const searchRegex = new RegExp(req.params.searchTerm,'i');
        const item = await ItemModel.find({name:{$regex:searchRegex}})
        res.send(item)
    }
))

router.get("/:itemId",asyncHandler(
    async (req,res) => {
        const item =await ItemModel.findById(req.params.itemId);
        res.send(item)
    }
))

export default router;