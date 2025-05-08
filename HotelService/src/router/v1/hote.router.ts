import express from "express";
import {
  createHotelHandler,
  deleteHotelHandler,
  getAllHotelhandler,
  getHotelByIdHandler,
  updateHotelHandler,
} from "../../controllers/hotel.controller";
import { validateRequestBody } from "../../validators";
import { hotelSchema } from "../../validators/hotel.validator";

const hotelRouter = express.Router();

hotelRouter.post("/", validateRequestBody(hotelSchema), createHotelHandler); // Todo: ad

hotelRouter.get("/", getAllHotelhandler);

hotelRouter.get("/:id", getHotelByIdHandler);

hotelRouter.put("/:id", validateRequestBody(hotelSchema), updateHotelHandler); // Todo: add update hotel handler
hotelRouter.delete("/:id", deleteHotelHandler);

export default hotelRouter;
