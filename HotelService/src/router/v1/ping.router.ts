import express from "express";
import { pingHandler } from "../../controllers/ping.controller";
import { pingSchema } from "../../validators/ping.validator";
import { validateRequestBody } from "../../validators";

const pingRouter = express.Router();

pingRouter.get("/", validateRequestBody(pingSchema), pingHandler);

export default pingRouter;
