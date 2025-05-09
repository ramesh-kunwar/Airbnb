import { Request, Response, NextFunction } from "express";
import {
  createHotelService,
  deleteHotelService,
  getAllHotelsService,
  getHotelByIdService,
  updateHotelService,
} from "../services/hotel.service";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // 1. Call the service layer

  const hotelResponse = await createHotelService(req.body);

  // 2. Send the response

  res.status(StatusCodes.CREATED).json({
    message: "Hotel created successfully",
    data: hotelResponse,
    success: true,
  });
}

export async function getHotelByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // 1. call the service layer
  const hotelResponse = await getHotelByIdService(Number(req.params.id));
  // 2. send the response
  res.status(StatusCodes.OK).json({
    message: "Hotel found successfully",
    data: hotelResponse,
    success: true,
  });
}

export async function getAllHotelhandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // 1. call the service layer

  const hotelResponse = await getAllHotelsService();

  // 2. send the response
  res.status(StatusCodes.OK).json({
    message: "Hotels found successfully",
    data: hotelResponse,
    success: true,
  });
}

export async function updateHotelHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // 1. call the service layer

  const hotelResponse = await updateHotelService(
    Number(req.params.id),
    req.body
  );

  // 2. send the response
  res.status(StatusCodes.OK).json({
    message: "hotel Updated successfully",
    data: hotelResponse,
    success: true,
  });
}
export async function deleteHotelHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // 1. call the service layer
  await deleteHotelService(Number(req.params.id));

  // 2. send the response
  res.status(StatusCodes.OK).json({
    message: "Hotel deleted successfully",
    data: null,
    success: true,
  });
}
