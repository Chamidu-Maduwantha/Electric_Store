import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import { sample_items, sample_users } from './data';
import itemRouter from './router/item.router';
import userRouter from './router/user.router';
import { dbConnect } from './config/database.config';
import orderRouter from './router/order.router';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));





app.use("/api/item",itemRouter);
app.use("/api/user", userRouter);
app.use("/api/orders", orderRouter);

//app.use(express.static('public'));
//app.get('*', (req, res) => {
   // res.sendFile(path.join(__dirname,'public', 'index.html'))
//})

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})