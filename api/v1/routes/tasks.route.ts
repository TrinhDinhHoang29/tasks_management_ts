import express, {Router } from "express";
import * as taskController from "../controllers/tasks.controller";
const router:Router = Router();

router.get("/",taskController.index);

export default router;
