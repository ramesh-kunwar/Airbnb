// this file contains all the basic configuratin logic for the app server to work
import dotenv from "dotenv";

type ServerConfig = {
  PORT: number;
};

export function loadEnv() {
  dotenv.config();
  console.log(`Environment variables loaded`);
}
loadEnv();
export const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 4000,
};
