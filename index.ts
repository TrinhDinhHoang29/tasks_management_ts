import express, { Express } from "express";
const app = express();
const port = 3000;


app.listen(3000,()=>{
    console.log("App run on port: "+port);
})