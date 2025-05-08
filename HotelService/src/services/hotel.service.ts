import { createHotelDTO } from "../dto/hotel.dto";
import {
  createHotel,
  deleteHotelById,
  getAllHotels,
  getHotelById,
  updateHotel,
} from "../repositories/hotel.repository";

const blockListedAddresses = ["123 Fake St", "456 Elm St", "789 Maple Ave"];

export function isAddressBlocked(address: string): boolean {
  return blockListedAddresses.includes(address);
}
export async function createHotelService(hotelData: createHotelDTO) {
  if (isAddressBlocked(hotelData.address)) {
    throw new Error("Hotel address is blocked");
  }
  const hotel = await createHotel(hotelData);

  return hotel;
}

export async function getHotelByIdService(id: number) {
  const hotel = await getHotelById(id);
  return hotel;
}

export async function getAllHotelsService() {
  const hotels = await getAllHotels();
  return hotels;
}

export async function updateHotelService(
  id: number,
  hotelData: createHotelDTO
) {
  const hotel = await updateHotel(id, hotelData);
  return hotel;
}

export async function deleteHotelService(id: number) {
  const hotel = await deleteHotelById(id);
  return hotel;
}
