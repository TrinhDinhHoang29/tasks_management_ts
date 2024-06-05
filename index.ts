import express, { Express,Request,Response } from "express";
import dotenv from "dotenv"
import * as database from "./config/database";
import routes from "./api/v1/routes/index.route";
const app:Express = express();
dotenv.config();
const port:(Number|String) = process.env.PORT || 8080;

database.connect();
routes(app);
app.listen(port,()=>{
    console.log("App run on port: "+port);
})