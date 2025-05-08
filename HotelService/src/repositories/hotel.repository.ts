import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { createHotelDTO } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData: createHotelDTO) {
  const hotel = await Hotel.create({
    name: hotelData.name,
    address: hotelData.address,
    location: hotelData.location,
    rating: hotelData.rating,
    ratingCount: hotelData.ratingCount,
  });

  logger.info("Hotel created successfully", hotel.id);
  return hotel;
}

export async function getHotelById(id: number) {
  const hotel = await Hotel.findByPk(id);

  if (!hotel) {
    logger.error(`Hotel not found with id: ${id}`);
    throw new NotFoundError("Hotel not found");
  }

  logger.info(`Hotel found with id: ${id}`);
  return hotel;
}

export async function getAllHotels() {
  const hotels = await Hotel.findAll();

  if (!hotels) {
    logger.error("No hotels found");
    throw new NotFoundError("No hotels found");
  }
  logger.info("Hotels found successfully");
  return hotels;
}

export async function updateHotel(id: number, hotelData: createHotelDTO) {
  const hotel = await Hotel.findByPk(id);

  if (!hotel) {
    logger.error(`Hotel not found with id: ${id}`);
    throw new NotFoundError("Hotel not found");
  }

  await hotel.update(
    {
      name: hotelData.name,
      address: hotelData.address,
      location: hotelData.location,
      rating: hotelData.rating,
      ratingCount: hotelData.ratingCount,
    },
    { where: { id } }
  );
  logger.info(`Hotel updated successfully with id: ${id}`);
  return hotel;
}

export async function deleteHotelById(id: number) {
  const hotel = await Hotel.findByPk(id);

  if (!hotel) {
    logger.error(`Hotel not found with id: ${id}`);
    throw new NotFoundError("Hotel not found");
  }
  await hotel.destroy();
}
