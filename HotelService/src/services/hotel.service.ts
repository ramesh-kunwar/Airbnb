import { createHotelDTO } from "../dto/hotel.dto";
import { createHotel, getHotelById } from "../repositories/hotel.repository";

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
