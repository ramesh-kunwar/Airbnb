// this file contains all the basic configuratin logic for the app server to work
import dotenv from "dotenv";

type ServerConfig = {
  PORT: number;
};

type DBConfig = {
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
};

export function loadEnv() {
  dotenv.config();
  console.log(`Environment variables loaded`);
}
loadEnv();
export const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 4000,
};

export const dbConfig: DBConfig = {
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_USER: process.env.DB_USER || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "rootUser",
  DB_NAME: process.env.DB_NAME || "test_db",
};
