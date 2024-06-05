import express, { Express,Request,Response } from "express";
import taskModel from "../models/task.model";

export const index = async(req:Request,res:Response):Promise<void>=>{
    const tasks = await taskModel.find({deleted:false});
    res.json(tasks);
 }