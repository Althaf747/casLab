import express from "express";
import tpController from "../controller/tpController.js";

export const tpRoute = new express.Router()

tpRoute.post('/api/tp',tpController.create)
tpRoute.get('/api/tp/:judul',tpController.getTp)
tpRoute.patch('/api/tp/:judul',tpController.updateTp)
tpRoute.delete('/api/tp/:judul',tpController.deleteTp)
