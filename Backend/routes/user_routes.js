import express from "express";
import {
  UpdateMarkcontroller,
  addtaskcontroller,
  alltaskcontroller,
  deletetaskcontroller,
} from "../controllers/addcontroller.js";

const router = express.Router();

router.post("/addtask", addtaskcontroller);

router.get("/alltask", alltaskcontroller);

router.put("/updatetask/:id", UpdateMarkcontroller);

router.delete("/deletetask/:id", deletetaskcontroller);

export default router;
