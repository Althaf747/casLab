import express from "express";

import {tpRoute} from "../route/tpRoute.js";
import path from "path"


export const web = express()
web.use(express.json())

web.get('/', function(req, res) {
    res.sendFile(__dirname + '../public/index.html');
});

web.use(tpRoute)
