import express from "express";

import {tpRoute} from "../route/tpRoute.js";

export const web = express()
web.use(express.json())
web.use(tpRoute)
